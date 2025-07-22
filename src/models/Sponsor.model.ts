import mongoose, { Schema, Document } from 'mongoose';
import { SponsorClassification } from '../constants/enums';

export interface ISponsor extends Document {
  eventId: mongoose.Types.ObjectId;
  name: string;
  poc: {
    name: string;
    email: string;
    phone?: string;
  };
  classification: SponsorClassification;
  type: string;
  boothDetails?: {
    number?: string;
    size?: string;
    location?: string;
    notes?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const sponsorSchema = new Schema<ISponsor>({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  name: { type: String, required: true },
  poc: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
  },
  classification: { type: String, enum: ['Gold', 'Platinum', 'Silver', 'Media', 'Other'], required: true },
  type: { type: String, required: true },
  boothDetails: {
    number: { type: String, required: false },
    size: { type: String, required: false },
    location: { type: String, required: false },
    notes: { type: String, required: false },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

const Sponsor = mongoose.model<ISponsor>('Sponsor', sponsorSchema);

export default Sponsor; 