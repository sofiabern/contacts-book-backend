import nodemailer from 'nodemailer';

import { SMTP } from '../constants/index.js';


console.log(SMTP);


const transport = nodemailer.createTransport({
  host: SMTP.HOST,
  port: SMTP.PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: SMTP.USER,
    pass: SMTP.PASSWORD,
  },
});


export const sendMail = (options) => {
  return transport.sendMail(options);
};
