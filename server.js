import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

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

  if (!name || !email || !service || !message) {
    return res.status(400).json({
      message: 'Please complete all required fields before sending your enquiry.',
    });
  }

  if (!smtpConfig.host || !smtpConfig.user || !smtpConfig.pass || !smtpConfig.from) {
    return res.status(500).json({
      message: 'SMTP is not configured yet. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM values to your environment before sending.',
    });
  }

  if (!smtpConfig.user.includes('@') || !smtpConfig.from.includes('@')) {
    return res.status(500).json({
      message: 'SMTP_USER and SMTP_FROM must be valid Gmail email addresses. For Gmail, also use a 16-character app password in SMTP_PASS.',
    });
  }

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: {
      user: smtpConfig.user,
      pass: smtpConfig.pass,
    },
  });

  const formattedMessage = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Service: ${service}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    await transporter.sendMail({
      from: smtpConfig.from,
      to: process.env.SMTP_TO || smtpConfig.user,
      replyTo: email,
      subject: `Website enquiry: ${service}`,
      text: formattedMessage,
      html: `<pre style="font-family: Arial, sans-serif; white-space: pre-wrap;">${formattedMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`,
    });

    return res.status(200).json({ success: true, message: 'Enquiry sent successfully.' });
  } catch (error) {
    console.error('SMTP send failed:', error);

    return res.status(500).json({
      message: 'The SMTP mail server rejected the enquiry. For Gmail, confirm SMTP_USER and SMTP_FROM are valid email addresses and SMTP_PASS is a real 16-character Google App Password.',
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
