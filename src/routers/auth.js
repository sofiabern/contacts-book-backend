import { Router } from 'express';

import {
  registerController,
  loginController,
  logoutController,
  refreshController,
  requestResetEmailController,
  resetPasswordController
} from '../controllers/auth.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {validateBody} from '../middlewares/validateBody.js';
import { registerUserSchema, loginUserSchema, requestResetEmailSchema, resetPasswordSchema} from '../validation/auth.js';

export const authRouter = Router();

authRouter.post('/register', validateBody(registerUserSchema), ctrlWrapper(registerController));
authRouter.post('/login', validateBody(loginUserSchema), ctrlWrapper(loginController));
authRouter.post('/logout', ctrlWrapper(logoutController));
authRouter.post('/refresh', ctrlWrapper(refreshController));
authRouter.post('/send-reset-email', validateBody(requestResetEmailSchema), ctrlWrapper(requestResetEmailController));
authRouter.post('/reset-pwd', validateBody(resetPasswordSchema), ctrlWrapper(resetPasswordController));