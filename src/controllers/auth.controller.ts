import { ApiRequest, ApiResponse, sendResponse, sendError, HttpStatus } from '../utils/types';
import * as authService from '../services/auth.service';

export const signUp = async (req: ApiRequest, res: ApiResponse) => {
  try {
    const user = await authService.signUp(req.body);
    sendResponse(res, user, HttpStatus.CREATED, 'User signed up successfully');
  } catch (err: any) {
    sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to sign up');
  }
};

export const signIn = async (req: ApiRequest, res: ApiResponse) => {
  try {
    const { email, password } = req.body;
    const result = await authService.signIn(email, password);
    sendResponse(res, result, HttpStatus.OK, 'User signed in successfully');
  } catch (err: any) {
    sendError(res, err.message, HttpStatus.UNAUTHORIZED, 'Failed to sign in');
  }
};

export const resetPassword = async (req: ApiRequest, res: ApiResponse) => {
  try {
    const { email, newPassword } = req.body;
    const user = await authService.resetPassword(email, newPassword);
    sendResponse(res, user, HttpStatus.OK, 'Password reset successfully');
  } catch (err: any) {
    sendError(res, err.message, HttpStatus.BAD_REQUEST, 'Failed to reset password');
  }
};
