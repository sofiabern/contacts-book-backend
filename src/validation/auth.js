import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .pattern(/^\S+@\S+\.\S+$/, 'email')
    .required()
    .messages({
      'string.pattern.name': 'Invalid email format',
    }),
  password: Joi.string().required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string()
    .pattern(/^\S+@\S+\.\S+$/, 'email')
    .required()
    .messages({
      'string.pattern.name': 'Invalid email format',
    }),
  password: Joi.string().required(),
});

export const requestResetEmailSchema = Joi.object({
  email: Joi.string()
    .pattern(/^\S+@\S+\.\S+$/, 'email')
    .required()
    .messages({
      'string.pattern.name': 'Invalid email format',
    }),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().required(),
  token: Joi.string().required(),
});

export const googleOAuthSchema = Joi.object({
  code: Joi.string().required(),
});
