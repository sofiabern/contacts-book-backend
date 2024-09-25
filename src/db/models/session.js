import mongoose, { Types } from "mongoose";

export const sessionSchema = new mongoose.Schema({
    userId:{
        type: Types.ObjectId,
        required: true,
    },
    accessToken: {
        type: String,
        required: true,
      },
      refreshToken: {
        type: String,
        required: true,
      },
      accessTokenValidUntil: {
        type: Date,
        required: true,
      },
      refreshTokenValidUntil: {
        type: Date,
        required: true,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
);

export const Session = mongoose.model('Session', sessionSchema);