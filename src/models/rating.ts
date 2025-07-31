import mongoose, { Schema, Document } from "mongoose";
import Room from "./room";

export interface IBooking extends Document {
    userId: Schema.Types.ObjectId;
    roomId: Schema.Types.ObjectId;
    startTime: Date;
    endTime: Date;
    totalHours: number;
    totalCost: number;
    status: {type: string, enum:['booked', 'cancelled', 'completed'], default: 'booked'}
    createdAt: Date;
    updatedAt: Date;
}

const bookingSchema = new Schema<IBooking>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    totalHours: {
        type: Number,
        required: true,
    },
    totalCost: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['booked', 'cancelled', 'completed'],
        default: 'booked',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

bookingSchema.post('findOneAndUpdate', async function(res){
    if(!res) return;
    if(res.status === 'cancelled' || res.status === 'completed'){
        await Room.findByIdAndUpdate(res.roomId, {isAvailable: true});
    }
})

export default mongoose.models.Booking || mongoose.model<IBooking>('Booking', bookingSchema);

