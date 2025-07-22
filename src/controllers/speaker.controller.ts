import { ApiRequest, ApiResponse, HttpStatus, sendResponse, sendError } from '../utils/types';
import * as speakerService from '../services/speaker.service';

type IdParam = { id: string };

export const createSpeaker = async (req: ApiRequest, res: ApiResponse) => {
    try {
        const speaker = await speakerService.createSpeaker(req.body);
        sendResponse(res, speaker, HttpStatus.CREATED, 'Speaker created successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to create speaker');
    }
};

export const getAllSpeakers = async (_req: ApiRequest, res: ApiResponse) => {
    try {
        const speakers = await speakerService.getAllSpeakers();
        sendResponse(res, speakers, HttpStatus.OK, 'Speakers fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch speakers');
    }
};

export const getSpeakerById = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const speaker = await speakerService.getSpeakerById(req.params.id);
        if (!speaker) return sendError(res, 'Speaker not found', HttpStatus.NOT_FOUND, 'Speaker not found');
        sendResponse(res, speaker, HttpStatus.OK, 'Speaker fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch speaker');
    }
};

export const updateSpeaker = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const updated = await speakerService.updateSpeaker(req.params.id, req.body);
        sendResponse(res, updated, HttpStatus.OK, 'Speaker updated successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to update speaker');
    }
};

export const deleteSpeaker = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        await speakerService.deleteSpeaker(req.params.id);
        sendResponse(res, null, HttpStatus.NO_CONTENT, 'Speaker deleted successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to delete speaker');
    }
}; 