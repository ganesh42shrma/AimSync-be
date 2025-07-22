import { ApiRequest, ApiResponse, HttpStatus, sendResponse, sendError } from '../utils/types';
import * as resourceService from '../services/resource.service';

type IdParam = { id: string };

export const createResource = async (req: ApiRequest, res: ApiResponse) => {
    try {
        const resource = await resourceService.createResource(req.body);
        sendResponse(res, resource, HttpStatus.CREATED, 'Resource created successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to create resource');
    }
};

export const getAllResources = async (_req: ApiRequest, res: ApiResponse) => {
    try {
        const resources = await resourceService.getAllResources();
        sendResponse(res, resources, HttpStatus.OK, 'Resources fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch resources');
    }
};

export const getResourceById = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const resource = await resourceService.getResourceById(req.params.id);
        if (!resource) return sendError(res, 'Resource not found', HttpStatus.NOT_FOUND, 'Resource not found');
        sendResponse(res, resource, HttpStatus.OK, 'Resource fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch resource');
    }
};

export const updateResource = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const updated = await resourceService.updateResource(req.params.id, req.body);
        sendResponse(res, updated, HttpStatus.OK, 'Resource updated successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to update resource');
    }
};

export const deleteResource = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        await resourceService.deleteResource(req.params.id);
        sendResponse(res, null, HttpStatus.NO_CONTENT, 'Resource deleted successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to delete resource');
    }
}; 