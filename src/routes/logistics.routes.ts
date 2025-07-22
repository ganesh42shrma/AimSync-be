import express from 'express';
import * as logisticsController from '../controllers/logistics.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';
import { UserRole } from '../constants/enums';

const router = express.Router();

router.get('/', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), logisticsController.getAllLogistics);
router.post('/', authMiddleware, requireRole(UserRole.ADMIN), logisticsController.createLogistics);
router.get('/:id', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), logisticsController.getLogisticsById);
router.put('/:id', authMiddleware, requireRole(UserRole.ADMIN), logisticsController.updateLogistics);
router.delete('/:id', authMiddleware, requireRole(UserRole.ADMIN), logisticsController.deleteLogistics);

export default router; 