import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import myLogger from "./configs/winston.js";
import EmailRouter from "./routers/EmailRouter.js";
import SMSRouter from "./routers/SMSRouter.js";
import { Ok } from "./configs/http-status-codes.js";
import { connectSMS as ConnectSMS } from "./services/SendSMS.js"
let index = express();

index.use(json());
index.use(urlencoded({ extended: false }));
index.use(cookieParser());
index.use(cors());
index.use("/api/email", EmailRouter);
index.use("/api/sms", SMSRouter);
ConnectSMS();


// data response
index.use((data, req, res, next) => {
  let { statusCode, error, description } = data;
  statusCode = statusCode === undefined ? 404 : statusCode;
  if (statusCode < Ok || statusCode > 299) {
      let { method, url } = req;
      myLogger.info("Method: " + method + ", URl: " + url + ", Error: " + JSON.stringify(data), { label: "RESPONSE-ERROR" });
      res.status(statusCode).send({ code: statusCode, error, description });
  } else {
      let { method, url } = req;
      myLogger.info("Method: " + method + ", URl: " + url + ", Data: " + JSON.stringify(data.data), { label: "RESPONSE-OK" });
      res.status(statusCode).send(data.data);
  }
});

export default index;
