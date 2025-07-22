import { ApiRequest, ApiResponse, HttpStatus, sendResponse, sendError } from '../utils/types';
import * as userService from '../services/user.service';

// For routes with :id param
type IdParam = { id: string };

export const createUser = async (req: ApiRequest, res: ApiResponse) => {
    try {
        const user = await userService.createUser(req.body);
        sendResponse(res, user, HttpStatus.CREATED, 'User created successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to create user');
    }
};

export const getAllUsers = async (_req: ApiRequest, res: ApiResponse) => {
    try {
        const users = await userService.getAllUsers();
        sendResponse(res, users, HttpStatus.OK, 'Users fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch users');
    }
};

export const getUserById = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) return sendError(res, 'User not found', HttpStatus.NOT_FOUND, 'User not found');
        sendResponse(res, user, HttpStatus.OK, 'User fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch user');
    }
};

export const updateUser = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const updated = await userService.updateUser(req.params.id, req.body);
        sendResponse(res, updated, HttpStatus.OK, 'User updated successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to update user');
    }
};

export const deleteUser = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        await userService.deleteUser(req.params.id);
        sendResponse(res, null, HttpStatus.NO_CONTENT, 'User deleted successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to delete user');
    }
};
