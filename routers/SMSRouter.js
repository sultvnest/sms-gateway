import { Router } from "express";
import SMSController from "../controllers/SMSController.js";
const router = Router();
const sms = new SMSController();

router.post("/send/", (req, res, next) => {
  const { from, to, text } = req.body;
  const data = sms.sendSMS(from, to, text);
  next(data);
});
export default router;
