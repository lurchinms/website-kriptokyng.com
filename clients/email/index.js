import nodemailer from "nodemailer";

import { emailConfig } from "../../config/email";

export const emailClient = nodemailer.createTransport({
  host: emailConfig.HOST,
  port: emailConfig.PORT,
  auth: {
    user: emailConfig.EMAIL,
    pass: emailConfig.PASSWORD,
  },
});
