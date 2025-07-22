import Speaker, { ISpeaker } from '../models/Speaker.model';
import { FilterQuery, ProjectionType } from 'mongoose';

// Create a new speaker
export const createSpeaker = async (data: Partial<ISpeaker>) => {
    const speaker = new Speaker(data);
    return await speaker.save();
};

// Get all speakers with optional filter and projection
export const getAllSpeakers = async (
    filter: FilterQuery<ISpeaker> = {},
    projection: ProjectionType<ISpeaker> = {}
) => {
    return await Speaker.find(filter, projection);
};

// Get speaker by ID with optional projection
export const getSpeakerById = async (
    id: string,
    projection: ProjectionType<ISpeaker> = {}
) => {
    return await Speaker.findById(id, projection);
};

// Update speaker
export const updateSpeaker = async (
    id: string,
    data: Partial<ISpeaker>
) => {
    return await Speaker.findByIdAndUpdate(id, data, { new: true });
};

// Delete speaker
export const deleteSpeaker = async (id: string) => {
    return await Speaker.findByIdAndDelete(id);
}; 