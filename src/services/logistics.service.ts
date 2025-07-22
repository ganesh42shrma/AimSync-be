import Logistics, { ILogistics } from '../models/Logistics.model';
import { FilterQuery, ProjectionType } from 'mongoose';

// Create a new logistics item
export const createLogistics = async (data: Partial<ILogistics>) => {
    const logistics = new Logistics(data);
    return await logistics.save();
};

// Get all logistics with optional filter and projection
export const getAllLogistics = async (
    filter: FilterQuery<ILogistics> = {},
    projection: ProjectionType<ILogistics> = {}
) => {
    return await Logistics.find(filter, projection);
};

// Get logistics by ID with optional projection
export const getLogisticsById = async (
    id: string,
    projection: ProjectionType<ILogistics> = {}
) => {
    return await Logistics.findById(id, projection);
};

// Update logistics
export const updateLogistics = async (
    id: string,
    data: Partial<ILogistics>
) => {
    return await Logistics.findByIdAndUpdate(id, data, { new: true });
};

// Delete logistics
export const deleteLogistics = async (id: string) => {
    return await Logistics.findByIdAndDelete(id);
}; 