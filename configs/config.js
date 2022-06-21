import dotenv from "dotenv";
dotenv.config();
export const Port = process.env.PORT || 3000;
export const Email = process.env.Email || '';
export const PasswordEmail = process.env.PasswordEmail || '';
export const HostSMS = process.env.HostSMS || '';
export const PortSMS = process.env.PortSMS || 4000;
export const SystemID = process.env.SystemID || '';
export const PasswordSMS = process.env.PasswordSMS || '';