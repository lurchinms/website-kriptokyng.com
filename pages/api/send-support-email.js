import { emailClient } from "../../clients/email";
import { emailConfig } from "../../config/email";

async function sendEmail(name, email, message) {
  try {
    await emailClient.sendMail({
      from: `${name} <${email}>`,
      to: emailConfig.FORWARD_EMAIL,
      subject: `KryptoKyng Pool Question.`,
      text: `Question from ${name} <${email}>: ${message}`,
      html: `<h3>Question from ${name}</h3><p>Email Address: ${email}</p><p>${message}</p>`,
    });
  } catch (err) {
    throw new Error(err);
  }
}

export default async function handler(req, res) {
  const { name, email, message } = req.query;

  try {
    await emailClient.verify();
    sendEmail(name, email, message);
    res.status(200).json({});
  } catch {
    res.status(500).json({});
  }
}
