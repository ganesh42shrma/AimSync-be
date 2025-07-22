import { ApiRequest, ApiResponse, HttpStatus, sendResponse, sendError } from '../utils/types';
import * as checklistService from '../services/checklist.service';

type IdParam = { id: string };

export const createChecklist = async (req: ApiRequest, res: ApiResponse) => {
    try {
        const checklist = await checklistService.createChecklist(req.body);
        sendResponse(res, checklist, HttpStatus.CREATED, 'Checklist created successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to create checklist');
    }
};

export const getAllChecklists = async (_req: ApiRequest, res: ApiResponse) => {
    try {
        const checklists = await checklistService.getAllChecklists();
        sendResponse(res, checklists, HttpStatus.OK, 'Checklists fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch checklists');
    }
};

export const getChecklistById = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const checklist = await checklistService.getChecklistById(req.params.id);
        if (!checklist) return sendError(res, 'Checklist not found', HttpStatus.NOT_FOUND, 'Checklist not found');
        sendResponse(res, checklist, HttpStatus.OK, 'Checklist fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch checklist');
    }
};

export const updateChecklist = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const updated = await checklistService.updateChecklist(req.params.id, req.body);
        sendResponse(res, updated, HttpStatus.OK, 'Checklist updated successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to update checklist');
    }
};

export const deleteChecklist = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        await checklistService.deleteChecklist(req.params.id);
        sendResponse(res, null, HttpStatus.NO_CONTENT, 'Checklist deleted successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to delete checklist');
    }
}; 