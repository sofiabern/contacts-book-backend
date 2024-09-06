import express from "express";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";

import { createContactController, deleteContactController, getAllContactsController,  getContactByIdController, updateContactController } from "../controllers/contacts.js";

export const router = express.Router();

router.get('/contacts', ctrlWrapper(getAllContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
router.post('/contacts', ctrlWrapper(createContactController));
router.patch('/contacts/:contactId', ctrlWrapper(updateContactController));
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

