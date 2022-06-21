import { sendEmail as SendEmail } from "../services/SendEmail.js";
import { Ok } from "../configs/http-status-codes.js"
export default class EmailController {
  sendEmail(email, text, subject) {
    if (email) {
      SendEmail(email, text, subject);
    }
    return { statusCode: Ok, data: { Code: Ok, data: "SENT" } }
  }
}
