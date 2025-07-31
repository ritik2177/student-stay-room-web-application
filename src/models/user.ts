import mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    mobilenumber?: string;
    createdAt: Date;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobilenumber: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.models.User || mongoose.model<IUser>("User", userSchema);
