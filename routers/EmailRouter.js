import { Router } from "express";
import EmailController from "../controllers/EmailController.js";
const router = Router();
const e = new EmailController();

router.post("/send/", (req, res, next) => {
  const { email, text, subject } = req.body;
  const data = e.sendEmail(email, text, subject);
  next(data);
});
export default router;
