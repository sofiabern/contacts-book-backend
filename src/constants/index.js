import path from "node:path";
export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const SMTP = {
  HOST: process.env.SMTP_HOST,
  PORT: process.env.SMTP_PORT,
  USER: process.env.SMTP_USER,
  PASSWORD: process.env.SMTP_PASSWORD,
  FROM: process.env.SMTP_FROM,
};

export const APP_DOMAIN = process.env.APP_DOMAIN;

export const TEMPLATE_DIR = path.resolve("src","templates");
export const TEMP_UPLOAD_DIR = path.resolve("temp")
export const UPLOAD_DIR = path.resolve( 'upload');

export const BACKEND_HOST = process.env.BACKEND_HOST;