import fs from 'node:fs/promises';
import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY } from '../constants/index.js';

cloudinary.config({
  cloud_name: CLOUDINARY.NAME,
  api_key: CLOUDINARY.API_KEY,
  api_secret: CLOUDINARY.API_SECRET,
});

export const saveToCloudinary = async (file) => {
  const res = await cloudinary.uploader.upload(file.path);
  await fs.unlink(file.path);

  return res.secure_url;
};