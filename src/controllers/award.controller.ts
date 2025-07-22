import { ApiRequest, ApiResponse, HttpStatus, sendResponse, sendError } from '../utils/types';
import * as awardService from '../services/award.service';

type IdParam = { id: string };

export const createAward = async (req: ApiRequest, res: ApiResponse) => {
    try {
        const award = await awardService.createAward(req.body);
        sendResponse(res, award, HttpStatus.CREATED, 'Award created successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to create award');
    }
};

export const getAllAwards = async (_req: ApiRequest, res: ApiResponse) => {
    try {
        const awards = await awardService.getAllAwards();
        sendResponse(res, awards, HttpStatus.OK, 'Awards fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch awards');
    }
};

export const getAwardById = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const award = await awardService.getAwardById(req.params.id);
        if (!award) return sendError(res, 'Award not found', HttpStatus.NOT_FOUND, 'Award not found');
        sendResponse(res, award, HttpStatus.OK, 'Award fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch award');
    }
};

export const updateAward = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const updated = await awardService.updateAward(req.params.id, req.body);
        sendResponse(res, updated, HttpStatus.OK, 'Award updated successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to update award');
    }
};

export const deleteAward = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        await awardService.deleteAward(req.params.id);
        sendResponse(res, null, HttpStatus.NO_CONTENT, 'Award deleted successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to delete award');
    }
}; 