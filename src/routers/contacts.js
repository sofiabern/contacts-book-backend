import express from "express";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";

import { validateBody } from "../middlewares/validateBody.js";

import { isValidId } from "../middlewares/isValid.js";

import { createContactSchema } from "../validation/contacts.js";
import { updateContactSchema } from "../validation/contacts.js";

import { createContactController, deleteContactController, getAllContactsController,  getContactByIdController, updateContactController } from "../controllers/contacts.js";

export const router = express.Router();

router.get('/contacts', ctrlWrapper(getAllContactsController));
router.get('/contacts/:contactId', isValidId('contactId'), ctrlWrapper(getContactByIdController));
router.post('/contacts', validateBody(createContactSchema), ctrlWrapper(createContactController));
router.patch('/contacts/:contactId', isValidId('contactId'), validateBody(updateContactSchema), ctrlWrapper(updateContactController));
router.delete('/contacts/:contactId', isValidId('contactId'), ctrlWrapper(deleteContactController));

