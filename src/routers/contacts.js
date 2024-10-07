import express from "express";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { authenticate } from "../middlewares/authenticate.js";
import { validateBody } from "../middlewares/validateBody.js";
import { isValidId } from "../middlewares/isValidId.js";
import {upload} from "..//middlewares/upload.js"

import { createContactSchema } from "../validation/contact.js";
import { updateContactSchema } from "../validation/contact.js";

import { createContactController, deleteContactController, getAllContactsController,  getContactByIdController, updateContactController } from "../controllers/contacts.js";

export const contactsRouter = express.Router();

contactsRouter.use('/', authenticate);
contactsRouter.get('/', ctrlWrapper(getAllContactsController));
contactsRouter.get('/:contactId', isValidId('contactId'), ctrlWrapper(getContactByIdController));
contactsRouter.post('/',  upload.single('photo'), validateBody(createContactSchema), ctrlWrapper(createContactController));
contactsRouter.patch('/:contactId', isValidId('contactId'), validateBody(updateContactSchema), ctrlWrapper(updateContactController));
contactsRouter.delete('/:contactId', isValidId('contactId'), ctrlWrapper(deleteContactController));

