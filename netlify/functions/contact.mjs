
import nodemailer from "nodemailer";

const json = (status, data) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);

export default async (request) => {
  if (request.method !== "POST") {
    return json(405, { message: "Method not allowed." });
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return json(400, { message: "Invalid request." });
  }

  const { name, email, phone, service, message } = body || {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof service !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !service.trim() ||
    !message.trim() ||
    name.length > 150 ||
    email.length > 254 ||
    service.length > 150 ||
    message.length > 10000 ||
    (phone != null &&
      (typeof phone !== "string" || phone.length > 50)) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return json(400, {
      message: "Please check the required fields and try again.",
    });
  }

  const {
    SMTP_HOST,
    SMTP_PORT = "587",
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    SMTP_TO,
    SMTP_SECURE = "false",
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    console.error("Required SMTP environment variables are missing.");

    return json(500, {
      message: "Email service is not configured. Please try again later.",
    });
  }

  const port = Number(SMTP_PORT);

  if (![465, 587].includes(port)) {
    return json(500, {
      message: "Email service configuration needs attention.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const safeName = name.trim();
  const safeEmail = email.trim();
  const safePhone = phone?.trim() || "Not provided";
  const safeService = service.trim();
  const safeMessage = message.trim();

  const formattedMessage = [
    `Name: ${safeName}`,
    `Email: ${safeEmail}`,
    `Phone: ${safePhone}`,
    `Service: ${safeService}`,
    "",
    "Message:",
    safeMessage,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: SMTP_TO || SMTP_USER,
      replyTo: safeEmail,
      subject: `Website enquiry: ${safeService}`,
      text: formattedMessage,
      html: `<pre style="font-family:Arial,sans-serif;white-space:pre-wrap">${escapeHtml(formattedMessage)}</pre>`,
    });

    return json(200, {
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("SMTP send failed:", error.message);

    return json(500, {
      message:
        "We could not send your enquiry. Please try again later.",
    });
  } finally {
    transporter.close();
  }
};
