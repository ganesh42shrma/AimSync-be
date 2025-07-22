import Checklist, { IChecklist } from '../models/Checklist.model';
import { FilterQuery, ProjectionType } from 'mongoose';

// Create a new checklist
export const createChecklist = async (data: Partial<IChecklist>) => {
    const checklist = new Checklist(data);
    return await checklist.save();
};

// Get all checklists with optional filter and projection
export const getAllChecklists = async (
    filter: FilterQuery<IChecklist> = {},
    projection: ProjectionType<IChecklist> = {}
) => {
    return await Checklist.find(filter, projection);
};

// Get checklist by ID with optional projection
export const getChecklistById = async (
    id: string,
    projection: ProjectionType<IChecklist> = {}
) => {
    return await Checklist.findById(id, projection);
};

// Update checklist
export const updateChecklist = async (
    id: string,
    data: Partial<IChecklist>
) => {
    return await Checklist.findByIdAndUpdate(id, data, { new: true });
};

// Delete checklist
export const deleteChecklist = async (id: string) => {
    return await Checklist.findByIdAndDelete(id);
}; 