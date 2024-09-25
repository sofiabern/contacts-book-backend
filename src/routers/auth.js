import { Router } from 'express';

import {
  registerController,
  loginController,
  logoutController,
  refreshController
} from '../controllers/auth.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {validateBody} from '../middlewares/validateBody.js';
import { registerUserSchema, loginUserSchema } from '../validation/user.js';

export const authRouter = Router();

authRouter.post('/register', validateBody(registerUserSchema), ctrlWrapper(registerController));
authRouter.post('/login', validateBody(loginUserSchema), ctrlWrapper(loginController));
authRouter.post('/logout', ctrlWrapper(logoutController));
authRouter.post('/refresh', ctrlWrapper(refreshController));
