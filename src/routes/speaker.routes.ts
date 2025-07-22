import express from 'express';
import * as speakerController from '../controllers/speaker.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';
import { UserRole } from '../constants/enums';

const router = express.Router();

router.get('/', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), speakerController.getAllSpeakers);
router.post('/', authMiddleware, requireRole(UserRole.ADMIN), speakerController.createSpeaker);
router.get('/:id', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), speakerController.getSpeakerById);
router.put('/:id', authMiddleware, requireRole(UserRole.ADMIN), speakerController.updateSpeaker);
router.delete('/:id', authMiddleware, requireRole(UserRole.ADMIN), speakerController.deleteSpeaker);

export default router; 