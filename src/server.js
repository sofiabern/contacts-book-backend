import express from 'express';
import cors from 'cors';
import pino from 'pino';
import pinoHttp from 'pino-http';
import dotenv from 'dotenv';

import { getAllContacts, getContactByIdController } from './controllers/contacts.js';

dotenv.config();

export const setupServer = () => {
  const app = express();

  app.use(cors());

  const logger = pino();
  app.use(pinoHttp({ logger }));

  app.get('/contacts', getAllContacts);

  app.get('/contacts/:contactId', getContactByIdController);

  app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
};
