import Sponsor, { ISponsor } from '../models/Sponsor.model';
import { FilterQuery, ProjectionType } from 'mongoose';

// Create a new sponsor
export const createSponsor = async (data: Partial<ISponsor>) => {
    const sponsor = new Sponsor(data);
    return await sponsor.save();
};

// Get all sponsors with optional filter and projection
export const getAllSponsors = async (
    filter: FilterQuery<ISponsor> = {},
    projection: ProjectionType<ISponsor> = {}
) => {
    return await Sponsor.find(filter, projection);
};

// Get sponsor by ID with optional projection
export const getSponsorById = async (
    id: string,
    projection: ProjectionType<ISponsor> = {}
) => {
    return await Sponsor.findById(id, projection);
};

// Update sponsor
export const updateSponsor = async (
    id: string,
    data: Partial<ISponsor>
) => {
    return await Sponsor.findByIdAndUpdate(id, data, { new: true });
};

// Delete sponsor
export const deleteSponsor = async (id: string) => {
    return await Sponsor.findByIdAndDelete(id);
}; 