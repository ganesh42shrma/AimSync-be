import Event, { IEvent } from '../models/Event.model';
import { FilterQuery, ProjectionType } from 'mongoose';

// Create a new event
export const createEvent = async (data: Partial<IEvent>) => {
    const event = new Event(data);
    return await event.save();
};

// Get all events with optional filter and projection
export const getAllEvents = async (
    filter: FilterQuery<IEvent> = {},
    projection: ProjectionType<IEvent> = {}
) => {
    return await Event.find(filter, projection);
};

// Get event by ID with optional projection
export const getEventById = async (
    id: string,
    projection: ProjectionType<IEvent> = {}
) => {
    return await Event.findById(id, projection);
};

// Update event
export const updateEvent = async (
    id: string,
    data: Partial<IEvent>
) => {
    return await Event.findByIdAndUpdate(id, data, { new: true });
};

// Delete event
export const deleteEvent = async (id: string) => {
    return await Event.findByIdAndDelete(id);
};

// Get event by code
export const getEventByCode = async (code: string) => {
    return await Event.findOne({ eventCode: code });
};