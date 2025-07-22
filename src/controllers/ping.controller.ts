import { ApiRequest, ApiResponse, HttpStatus, sendResponse, sendError } from '../utils/types';

export const ping = async (req: ApiRequest, res: ApiResponse) => {
    try {
        sendResponse(res, { message: 'pong' }, HttpStatus.OK);
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}