import User, { IUser } from '../models/User.model';
import { FilterQuery, ProjectionType } from 'mongoose';

// Create a new user
export const createUser = async (data: Partial<IUser>) => {
    const user = new User(data);
    return await user.save();
};

// Get all users with optional filter and projection
export const getAllUsers = async (
    filter: FilterQuery<IUser> = {},
    projection: ProjectionType<IUser> = {}
) => {
    return await User.find(filter, projection);
};

// Get user by ID with optional projection
export const getUserById = async (
    id: string,
    projection: ProjectionType<IUser> = {}
) => {
    return await User.findById(id, projection);
};

// Update user
export const updateUser = async (
    id: string,
    data: Partial<IUser>
) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
};

// Delete user
export const deleteUser = async (id: string) => {
    return await User.findByIdAndDelete(id);
};
