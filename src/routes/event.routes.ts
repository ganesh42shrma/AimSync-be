import express from 'express';
import * as eventController from '../controllers/event.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';
import { UserRole } from '../constants/enums';

const router = express.Router();

router.get('/', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), eventController.getAllEvents);
router.post('/', authMiddleware, requireRole(UserRole.ADMIN), eventController.createEvent);
router.get('/:id', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), eventController.getEventById);
router.put('/:id', authMiddleware, requireRole(UserRole.ADMIN), eventController.updateEvent);
router.delete('/:id', authMiddleware, requireRole(UserRole.ADMIN), eventController.deleteEvent);

export default router;
