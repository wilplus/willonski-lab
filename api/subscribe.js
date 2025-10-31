// CommonJS for Vercel Node functions
const nodemailer = require('nodemailer');

const EMAIL_TO   = process.env.TO_EMAIL;   // e.g., "artur@willonski.com"
const EMAIL_FROM = process.env.FROM_EMAIL; // e.g., "no-reply@willonski.com"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,        // e.g., "smtp.gmail.com"
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,                       // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,      // full SMTP username
    pass: process.env.SMTP_PASS       // app password / SMTP password
  }
});

// simple email validation
const isEmail = (s='') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

module.exports = async (req, res) => {
  // Allow only POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, company } = req.body || {};

    // Honeypot: if bots filled hidden field, drop silently
    if (company && String(company).trim() !== '') {
      return res.status(200).json({ ok: true });
    }

    if (!email || !isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    // Compose the message you receive
    const subject = `New subscriber: ${email}`;
    const text    = `New email collected: ${email}\n\nTime: ${new Date().toISOString()}`;
    const html    = `<p>New email collected: <strong>${email}</strong></p><p>Time: ${new Date().toISOString()}</p>`;

    await transporter.sendMail({
      to: EMAIL_TO,
      from: EMAIL_FROM,
      subject,
      text,
      html
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('subscribe error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
};