import Resource, { IResource } from '../models/Resource.model';
import { FilterQuery, ProjectionType } from 'mongoose';

// Create a new resource
export const createResource = async (data: Partial<IResource>) => {
    const resource = new Resource(data);
    return await resource.save();
};

// Get all resources with optional filter and projection
export const getAllResources = async (
    filter: FilterQuery<IResource> = {},
    projection: ProjectionType<IResource> = {}
) => {
    return await Resource.find(filter, projection);
};

// Get resource by ID with optional projection
export const getResourceById = async (
    id: string,
    projection: ProjectionType<IResource> = {}
) => {
    return await Resource.findById(id, projection);
};

// Update resource
export const updateResource = async (
    id: string,
    data: Partial<IResource>
) => {
    return await Resource.findByIdAndUpdate(id, data, { new: true });
};

// Delete resource
export const deleteResource = async (id: string) => {
    return await Resource.findByIdAndDelete(id);
}; 