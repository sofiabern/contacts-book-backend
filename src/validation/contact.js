import Joi from "joi";

export const createContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    phoneNumber: Joi.string().min(3).max(20).required(),
    email: Joi.string()
    .pattern(/^\S+@\S+\.\S+$/, 'email')
    .messages({
      'string.pattern.name': 'Invalid email format'
    }).optional(),
    isFavourite: Joi.boolean().optional(),
    contactType: Joi.string().valid('work', 'home', 'personal').optional()
});

export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).optional(),
    phoneNumber: Joi.string().min(3).max(20).optional(),
    email: Joi.string()
    .pattern(/^\S+@\S+\.\S+$/, 'email')
    .messages({
      'string.pattern.name': 'Invalid email format'
    }).optional(),
    isFavourite: Joi.boolean().optional(),
    contactType: Joi.string().valid('work', 'home', 'personal').optional()
});