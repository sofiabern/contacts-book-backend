import { getContacts, getContactById } from "../services/contacts.js";

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await getContacts();
        res.status(200).json({
            status: 200,
            message: "Successfully found contacts!",
            data: contacts
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Error fetching contacts",
            error: error.message
        });
    }
};

export const getContactByIdController = async (req, res) => {
    const { contactId } = req.params;

    try {
        const contact = await getContactById(contactId);

        if (!contact) {
            return res.status(404).json({
                message: 'Contact not found',
            });
        }

        return res.status(200).json({
            status: 200,
            message: `Successfully found contact with id ${contactId}!`,
            data: contact,
        });
    } catch (error) {
        console.error('Error fetching contact:', error);
        res.status(500).json({
            message: 'Internal server error',
        });
    }
};