import nodemailer from "nodemailer";
import { Email, PasswordEmail } from "../configs/config.js";
export function getWordsBetweenCurlies(str) {
  let results = [];
  let re = /{{([^}]+)}}/g;
  let text;
  while ((text = re.exec(str))) {
    results.push(text[1]);
  }
  return results;
}
export function sendEmail(gmail, text, subject) {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: Email,
      pass: PasswordEmail,
    },
  });
  transporter.sendMail({
    from: Email,
    to: gmail,
    subject: subject,
    text: text,
  });
}
