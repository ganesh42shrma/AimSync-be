import Award, { IAward } from '../models/Award.model';
import { FilterQuery, ProjectionType } from 'mongoose';

// Create a new award
export const createAward = async (data: Partial<IAward>) => {
    const award = new Award(data);
    return await award.save();
};

// Get all awards with optional filter and projection
export const getAllAwards = async (
    filter: FilterQuery<IAward> = {},
    projection: ProjectionType<IAward> = {}
) => {
    return await Award.find(filter, projection);
};

// Get award by ID with optional projection
export const getAwardById = async (
    id: string,
    projection: ProjectionType<IAward> = {}
) => {
    return await Award.findById(id, projection);
};

// Update award
export const updateAward = async (
    id: string,
    data: Partial<IAward>
) => {
    return await Award.findByIdAndUpdate(id, data, { new: true });
};

// Delete award
export const deleteAward = async (id: string) => {
    return await Award.findByIdAndDelete(id);
}; 