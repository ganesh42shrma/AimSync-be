import { ApiRequest, ApiResponse, HttpStatus, sendResponse, sendError } from '../utils/types';
import * as logisticsService from '../services/logistics.service';

type IdParam = { id: string };

export const createLogistics = async (req: ApiRequest, res: ApiResponse) => {
    try {
        const logistics = await logisticsService.createLogistics(req.body);
        sendResponse(res, logistics, HttpStatus.CREATED, 'Logistics item created successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to create logistics item');
    }
};

export const getAllLogistics = async (_req: ApiRequest, res: ApiResponse) => {
    try {
        const logistics = await logisticsService.getAllLogistics();
        sendResponse(res, logistics, HttpStatus.OK, 'Logistics items fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch logistics items');
    }
};

export const getLogisticsById = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const logistics = await logisticsService.getLogisticsById(req.params.id);
        if (!logistics) return sendError(res, 'Logistics item not found', HttpStatus.NOT_FOUND, 'Logistics item not found');
        sendResponse(res, logistics, HttpStatus.OK, 'Logistics item fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch logistics item');
    }
};

export const updateLogistics = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const updated = await logisticsService.updateLogistics(req.params.id, req.body);
        sendResponse(res, updated, HttpStatus.OK, 'Logistics item updated successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to update logistics item');
    }
};

export const deleteLogistics = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        await logisticsService.deleteLogistics(req.params.id);
        sendResponse(res, null, HttpStatus.NO_CONTENT, 'Logistics item deleted successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to delete logistics item');
    }
}; 