import express from 'express';
import * as awardController from '../controllers/award.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';
import { UserRole } from '../constants/enums';

const router = express.Router();

router.get('/', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), awardController.getAllAwards);
router.post('/', authMiddleware, requireRole(UserRole.ADMIN), awardController.createAward);
router.get('/:id', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), awardController.getAwardById);
router.put('/:id', authMiddleware, requireRole(UserRole.ADMIN), awardController.updateAward);
router.delete('/:id', authMiddleware, requireRole(UserRole.ADMIN), awardController.deleteAward);

export default router; 