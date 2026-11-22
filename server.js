import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { adminDb } from "./firebaseAdmin.js";

dotenv.config({ path: ".env.local" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 3001);

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_SECURE || 'false') === 'true',
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
  from: process.env.SMTP_FROM || process.env.SMTP_USER,
};

app.use(cors());
app.use(express.json({ limit: '1mb' }));


app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body || {};

  // Validate required fields
  if (
    !name?.trim() ||
    !email?.trim() ||
    !service?.trim() ||
    !message?.trim()
  ) {
    return res.status(400).json({
      message: 'Please complete all required fields before sending your enquiry.',
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({
      message: 'Please enter a valid email address.',
    });
  }

  if (!process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.SMTP_FROM) {
    return res.status(500).json({
      message: 'Email service is not configured.',
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || 'false') === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Save enquiry to Firestore first
    const enquiry = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || '',
      service: service.trim(),
      message: message.trim(),
      status: 'New',
      createdAt: new Date(),
      source: 'Website',
    };

    const docRef = await adminDb.collection('enquiries').add(enquiry);

    // Send email notification
    const formattedMessage = [
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      `Phone: ${enquiry.phone || 'Not provided'}`,
      `Service: ${enquiry.service}`,
      '',
      'Message:',
      enquiry.message,
      '',
      `Firestore enquiry ID: ${docRef.id}`,
    ].join('\n');

    const escapeHtml = (value) =>
      value.replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[character]);

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      replyTo: enquiry.email,
      subject: `Website enquiry: ${enquiry.service}`,
      text: formattedMessage,
      html: `<pre style="font-family: Arial, sans-serif; white-space: pre-wrap;">${escapeHtml(formattedMessage)}</pre>`,
    });

    return res.status(200).json({
      success: true,
      message: 'Enquiry sent successfully.',
      enquiryId: docRef.id,
    });

  } catch (error) {
    console.error('Enquiry processing failed:', error);

    return res.status(500).json({
      message: 'Your enquiry could not be fully processed. Please contact us directly if the problem continues.',
    });
  }
});

const distPath = path.join(__dirname, 'dist');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(distPath));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`SMTP mail server running on http://localhost:${port}`);
});
