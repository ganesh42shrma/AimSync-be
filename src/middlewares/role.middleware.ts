import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth.middleware';

export function requireRole(...allowedRoles: string[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user || !user.role) {
      return res.status(403).json({ success: false, message: 'Forbidden', error: 'No user role found' });
    }
    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ success: false, message: 'Forbidden', error: 'Insufficient permissions' });
    }
    next();
  };
} 