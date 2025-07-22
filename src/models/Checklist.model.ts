import mongoose, { Schema, Document } from 'mongoose';

export type ChecklistStatus = 'Todo' | 'In Progress' | 'Done' | 'Blocked' | 'Review';
export type ChecklistPriority = 'Low' | 'Medium' | 'High' | 'Critical';

export interface IChecklist extends Document {
  eventId?: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  assignedTo: mongoose.Types.ObjectId[];
  createdBy: mongoose.Types.ObjectId;
  status: ChecklistStatus;
  priority: ChecklistPriority;
  dueDate?: Date;
  completedAt?: Date;
  comments: Array<{
    userId: mongoose.Types.ObjectId;
    comment: string;
    createdAt: Date;
  }>;
  checklistItems: Array<{
    text: string;
    checked: boolean;
  }>;
  isGlobal: boolean;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const checklistSchema = new Schema<IChecklist>({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: false },
  title: { type: String, required: true },
  description: { type: String, required: false },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['Todo', 'In Progress', 'Done', 'Blocked', 'Review'], required: true },
  priority: { type: String, enum: ['Low', 'Medium', 'High', 'Critical'], required: true },
  dueDate: { type: Date, required: false },
  completedAt: { type: Date, required: false },
  comments: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }],
  checklistItems: [{
    text: { type: String, required: true },
    checked: { type: Boolean, required: true },
  }],
  isGlobal: { type: Boolean, required: true },
  notes: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

const Checklist = mongoose.model<IChecklist>('Checklist', checklistSchema);

export default Checklist; 