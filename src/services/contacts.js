import createHttpError from 'http-errors';

import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { Contact } from '../db/models/contact.js';
import { saveFileToLocalMachine } from '../utils/saveFileToLocalMachine.js';

export const getContacts = async ({
  page,
  perPage,
  sortOrder,
  sortBy,
  filter,
  userId,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = Contact.find({userId});

  if (filter.type) {
    contactsQuery.where('contactType').equals(filter.type);
  }

  if (filter.isFavourite !== undefined) {
    contactsQuery.where('isFavourite').equals(filter.isFavourite);
  }

  const [contactsCount, contacts] = await Promise.all([
    contactsQuery.clone().countDocuments(),
    contactsQuery
      .skip(skip) 
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  if (contactsCount === 0) {
    throw createHttpError(404, 'No contacts found for this user');
  }

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = async (contactId, userId) => {
  const contact = await Contact.findOne({ _id: contactId, userId });
  return contact;
};

export const createContact = async (payload) => {
  console.log(payload.photo)
  const url = await saveFileToLocalMachine(payload.photo)
  const contact = await Contact.create({...payload, photo: url});
  return contact;
};

export const updateContact = async (id, userId, payload) => {
  const contact = await Contact.findOneAndUpdate({ _id: id, userId }, payload, {
    new: true,
  });
  return contact;
};

export const deleteContact = async (id, userId) => {
  const contact = await Contact.findOneAndDelete({ _id: id, userId });
  return contact;
};
