import express from 'express';
import * as resourceController from '../controllers/resource.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';
import { UserRole } from '../constants/enums';

const router = express.Router();

router.get('/', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), resourceController.getAllResources);
router.post('/', authMiddleware, requireRole(UserRole.ADMIN), resourceController.createResource);
router.get('/:id', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), resourceController.getResourceById);
router.put('/:id', authMiddleware, requireRole(UserRole.ADMIN), resourceController.updateResource);
router.delete('/:id', authMiddleware, requireRole(UserRole.ADMIN), resourceController.deleteResource);

export default router; 