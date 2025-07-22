import { Request, Response } from 'express';

export type ApiRequest<Params = any, Body = any> = Request<Params, {}, Body>;
export type ApiResponse<T = any> = Response<T>; 

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export function sendResponse<T>(
  res: ApiResponse,
  data: T,
  status: number = 200,
  message: string = 'Success'
) {
  return res.status(status).json({ success: true, message, data });
}

export function sendError(
  res: ApiResponse,
  error: string,
  status: number = 500,
  message: string = 'Error'
) {
  return res.status(status).json({ success: false, message, error });
}