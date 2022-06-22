import { Ok } from "../configs/http-status-codes.js";
import { sendSMS } from "../services/SendSMS.js";
export default class EmailController {
  sendSMS(from, to, text) {
    sendSMS(from, to, text);
    return { statusCode: Ok, data: { code: Ok, data: "SENT_SMS" } };
  }
}
