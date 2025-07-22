import { ApiRequest, ApiResponse, HttpStatus, sendResponse, sendError } from '../utils/types';
import * as sponsorService from '../services/sponsor.service';

type IdParam = { id: string };

export const createSponsor = async (req: ApiRequest, res: ApiResponse) => {
    try {
        const sponsor = await sponsorService.createSponsor(req.body);
        sendResponse(res, sponsor, HttpStatus.CREATED, 'Sponsor created successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to create sponsor');
    }
};

export const getAllSponsors = async (_req: ApiRequest, res: ApiResponse) => {
    try {
        const sponsors = await sponsorService.getAllSponsors();
        sendResponse(res, sponsors, HttpStatus.OK, 'Sponsors fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch sponsors');
    }
};

export const getSponsorById = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const sponsor = await sponsorService.getSponsorById(req.params.id);
        if (!sponsor) return sendError(res, 'Sponsor not found', HttpStatus.NOT_FOUND, 'Sponsor not found');
        sendResponse(res, sponsor, HttpStatus.OK, 'Sponsor fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch sponsor');
    }
};

export const updateSponsor = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const updated = await sponsorService.updateSponsor(req.params.id, req.body);
        sendResponse(res, updated, HttpStatus.OK, 'Sponsor updated successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to update sponsor');
    }
};

export const deleteSponsor = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        await sponsorService.deleteSponsor(req.params.id);
        sendResponse(res, null, HttpStatus.NO_CONTENT, 'Sponsor deleted successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to delete sponsor');
    }
}; 