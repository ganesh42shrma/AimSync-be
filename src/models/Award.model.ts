import mongoose, { Schema, Document } from 'mongoose';
import { AwardRecipientType } from '../constants/enums';

export interface IAward extends Document {
  eventId: mongoose.Types.ObjectId;
  recipientType: AwardRecipientType;
  speakerId?: mongoose.Types.ObjectId;
  guestInfo?: {
    name: string;
    email: string;
    organization?: string;
    designation?: string;
  };
  awardType: string;
  awardTitle?: string;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const awardSchema = new Schema<IAward>({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  recipientType: { type: String, enum: ['Speaker', 'Guest'], required: true },
  speakerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Speaker', required: false },
  guestInfo: {
    name: { type: String, required: false },
    email: { type: String, required: false },
    organization: { type: String, required: false },
    designation: { type: String, required: false },
  },
  awardType: { type: String, required: true },
  awardTitle: { type: String, required: false },
  notes: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

const Award = mongoose.model<IAward>('Award', awardSchema);

export default Award; 