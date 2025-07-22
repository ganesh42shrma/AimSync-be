import express from 'express';
import * as checklistController from '../controllers/checklist.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';
import { UserRole } from '../constants/enums';

const router = express.Router();

router.get('/', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), checklistController.getAllChecklists);
router.post('/', authMiddleware, requireRole(UserRole.ADMIN), checklistController.createChecklist);
router.get('/:id', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), checklistController.getChecklistById);
router.put('/:id', authMiddleware, requireRole(UserRole.ADMIN), checklistController.updateChecklist);
router.delete('/:id', authMiddleware, requireRole(UserRole.ADMIN), checklistController.deleteChecklist);

export default router; 