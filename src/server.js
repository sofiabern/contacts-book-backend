import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pino from 'pino';
import pinoHttp from 'pino-http';
import cookiesParser from 'cookie-parser';

import { router } from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { UPLOAD_DIR } from './constants/index.js';

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use('/uploads', express.static(UPLOAD_DIR));

  app.use(cors());

  app.use(cookiesParser());

  const logger = pino();
  app.use(pinoHttp({ logger }));

  app.use(router);

  app.use(notFoundHandler);

  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
