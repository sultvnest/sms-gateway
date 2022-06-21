import { PortSMS, HostSMS, SystemID, PasswordSMS } from "../configs/config.js";
import smpp from "smpp";
const session = new smpp.Session({ host: HostSMS, port: PortSMS });
export function connectSMS() {
  let isConnected = false;
  session.on("connect", () => {
    isConnected = true;
    session.bind_transceiver(
      {
        system_id: SystemID,
        password: PasswordSMS,
        interface_version: 1,
        system_type: "380666000600", // pending
        address_range: "+380666000600", // pending
        addr_ton: 1,
        addr_npi: 1,
      },
      (pdu) => {
        if (pdu.command_status == 0) {
          console.log("Successfully bound");
        }
      }
    );
  });

  session.on("close", () => {
    console.log("smpp is now disconnected");
    if (isConnected) {
      session.connect(); //reconnect again
    }
  });

  session.on("error", (error) => {
    console.log("smpp error", error);
    isConnected = false;
  });
}
export function sendSMS(from, to, text) {
  from = `+${from}`;

  to = `+${to}`;

  session.submit_sm(
    {
      source_addr: from,
      destination_addr: to,
      short_message: text,
    },
    function (pdu) {
      if (pdu.command_status == 0) {
        // Message successfully sent
        console.log(pdu.message_id);
      }
    }
  );
}
