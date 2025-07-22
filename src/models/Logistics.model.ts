import mongoose, { Schema, Document } from 'mongoose';
import { LogisticsStatus, LogisticsDirection } from '../constants/enums';

export interface ILogistics extends Document {
  eventId: mongoose.Types.ObjectId;
  itemName: string;
  category: string;
  quantity: number;
  status: LogisticsStatus;
  direction: LogisticsDirection;
  expectedArrival?: Date;
  actualArrival?: Date;
  expectedReturn?: Date;
  actualReturn?: Date;
  vendor?: string;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const logisticsSchema = new Schema<ILogistics>({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  itemName: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, enum: LogisticsStatus, required: true },
  direction: { type: String, enum: LogisticsDirection, required: true },
  expectedArrival: { type: Date, required: false },
  actualArrival: { type: Date, required: false },
  expectedReturn: { type: Date, required: false },
  actualReturn: { type: Date, required: false },
  vendor: { type: String, required: false },
  notes: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

const Logistics = mongoose.model<ILogistics>('Logistics', logisticsSchema);

export default Logistics; 