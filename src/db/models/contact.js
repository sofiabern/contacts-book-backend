import mongoose, { Types } from 'mongoose';

 const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [/\S+@\S+\.\S+/, 'Invalid email format'],
        default: null
    },
    isFavourite: {
        type: Boolean,
        default: false
    },
    contactType: {
        type: String,
        enum: ['work', 'home', 'personal'],
        default: 'personal'
    },
    userId:{
        type: Types.ObjectId,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});


export const Contact = mongoose.model('Contact', contactSchema);