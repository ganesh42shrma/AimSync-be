import { ApiRequest, ApiResponse, HttpStatus, sendResponse, sendError } from '../utils/types';
import * as eventService from '../services/event.service';

type IdParam = { id: string };

export const createEvent = async (req: ApiRequest, res: ApiResponse) => {
    try {
        if (req.body.eventCode) {
            const existingEvent = await eventService.getEventByCode(req.body.eventCode);
            if (existingEvent) {
                return sendError(res, 'Event code already exists', HttpStatus.BAD_REQUEST, 'Event code already exists');
            }
        }
        const event = await eventService.createEvent(req.body);

        sendResponse(res, event, HttpStatus.CREATED, 'Event created successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to create event');
    }
};

export const getAllEvents = async (_req: ApiRequest, res: ApiResponse) => {
    try {
        const events = await eventService.getAllEvents();
        sendResponse(res, events, HttpStatus.OK, 'Events fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch events');
    }
};

export const getEventById = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const event = await eventService.getEventById(req.params.id);
        if (!event) return sendError(res, 'Event not found', HttpStatus.NOT_FOUND, 'Event not found');
        sendResponse(res, event, HttpStatus.OK, 'Event fetched successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch event');
    }
};

export const updateEvent = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        const updated = await eventService.updateEvent(req.params.id, req.body);
        sendResponse(res, updated, HttpStatus.OK, 'Event updated successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to update event');
    }
};

export const deleteEvent = async (req: ApiRequest<IdParam>, res: ApiResponse) => {
    try {
        await eventService.deleteEvent(req.params.id);
        sendResponse(res, null, HttpStatus.NO_CONTENT, 'Event deleted successfully');
    } catch (err: any) {
        sendError(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to delete event');
    }
};
