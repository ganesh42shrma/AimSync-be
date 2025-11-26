import mongoose, { Schema, Document } from 'mongoose';

export interface ISpeaker extends Document {
  name: string;
  bio: string;
  photoUrl: string;
  eventId: mongoose.Types.ObjectId;
  startTime: Date;
  endTime: Date;
  createdAt?: Date;
  updatedAt?: Date;
  topic: string;
  email: string;
  organization: string;
  designation: string;
  socialLinks: [{ type: string; url: string }];
  isKeynote: boolean;
  order: number;
  notes?: string;
}

const speakerSchema = new Schema<ISpeaker>({
  eventId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  name: { type: String, required: true },
  bio: { type: String, required: true },
  photoUrl: { type: String, required: false },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  topic: { type: String, required: true },
  email: { type: String, required: true },
  organization: { type: String, required: true },
  designation: { type: String, required: true },
  socialLinks: [{ type: { type: String, required: true }, url: { type: String, required: true } }],
  isKeynote: { type: Boolean, required: true },
  order: { type: Number, required: true },
  notes: { type: String, required: false },
}, {
  timestamps: true,
});

const Speaker = mongoose.model<ISpeaker>('Speaker', speakerSchema);

export default Speaker; 