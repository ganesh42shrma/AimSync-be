import mongoose from 'mongoose';
import { EventType, EventStatus } from '../constants/enums';

export interface IEvent extends mongoose.Document {
    eventCode: string;
    title: string;
    type: EventType;
    location: string;
    venueName: string;
    address: string;
    coverImage: string;
    startDate: Date;
    endDate: Date;
    createdBy: mongoose.Types.ObjectId;
    status: EventStatus;
    createdAt?: Date;
    updatedAt?: Date;
}

const eventSchema = new mongoose.Schema<IEvent>({
    eventCode: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    type: { type: String, enum: EventType, required: true },
    location: { type: String, required: true },
    venueName: { type: String, required: true },
    address: { type: String, required: true },
    coverImage: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: EventStatus, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
},
    {
        timestamps: true,
    }
)

const Event = mongoose.model<IEvent>('Event', eventSchema);

export default Event;