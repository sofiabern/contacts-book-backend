// import dotenv from "dotenv";
// dotenv.config();

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const SMTP = {
  HOST: process.env.SMTP_HOST,
  PORT: Number(process.env.SMTP_PORT),
  USER: process.env.SMTP_USER,
  PASSWORD: process.env.SMTP_PASSWORD,
  FROM_EMAIL: process.env.SMTP_FROM_EMAIL,
};

console.log(SMTP);