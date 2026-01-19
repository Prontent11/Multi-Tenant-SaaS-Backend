import nodemailer from 'nodemailer';
import { EMAIL_PASS,EMAIL_USER } from '../../config/env';
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email', // or Gmail / Mailtrap
  port: 587,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export async function sendEmail(
  to: string,
  subject: string,
  text: string
) {
  await transporter.sendMail({
    from: '"Task SaaS" <no-reply@tasksaas.com>',
    to,
    subject,
    text,
  });
}
