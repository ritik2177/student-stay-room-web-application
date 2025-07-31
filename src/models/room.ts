import mongoose, { Schema, Document, Types } from "mongoose";

interface Location {
    latitude: number;
    longitude: number;
}

export interface IRoom extends Document {
    title: string;
    description: string;
    address: {
        street: string;
        city: string;
        state: string;
        pincode: number;
    };
    pricePerHour: number;
    location: Location;
    currentlocation: Location;
    amenities: ('wifi' |'AC' | 'parking' | 'TV')[];
    noOfPeople: number
    images: string[]
    userId: Types.ObjectId;
    isAvailable: boolean;
    createdAt: Date;
}

const roomSchema = new Schema<IRoom>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            required: true,
        },
    },
    pricePerHour: {
        type: Number,
        required: true,
    },
    currentlocation: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
    },
    amenities: {
        type: [String],
        required: true,
    },
    noOfPeople: {
        type: Number,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Room || mongoose.model<IRoom>('Room', roomSchema);