import mongoose, { Schema, Document } from 'mongoose';

export interface IResource extends Document {
  eventId?: mongoose.Types.ObjectId;
  name: string;
  role: string;
  organization?: string;
  contactInfo: {
    email?: string;
    phone?: string;
    alternatePhone?: string;
    address?: string;
  };
  isGlobal: boolean;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const resourceSchema = new Schema<IResource>({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: false },
  name: { type: String, required: true },
  role: { type: String, required: true },
  organization: { type: String, required: false },
  contactInfo: {
    email: { type: String, required: false },
    phone: { type: String, required: false },
    alternatePhone: { type: String, required: false },
    address: { type: String, required: false },
  },
  isGlobal: { type: Boolean, required: true },
  notes: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

const Resource = mongoose.model<IResource>('Resource', resourceSchema);

export default Resource; 