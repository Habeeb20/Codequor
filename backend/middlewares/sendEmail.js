// utils/sendEmail.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

  await transporter.sendMail({
    from: `"CodeQuor" <${process.env.EMAIL_USER}>`,
    to, 
    subject,
    html,
  });
};

export default sendEmail;