import express from 'express';
import * as sponsorController from '../controllers/sponsor.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';
import { UserRole } from '../constants/enums';

const router = express.Router();

router.get('/', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), sponsorController.getAllSponsors);
router.post('/', authMiddleware, requireRole(UserRole.ADMIN), sponsorController.createSponsor);
router.get('/:id', authMiddleware, requireRole(UserRole.ADMIN, UserRole.USER), sponsorController.getSponsorById);
router.put('/:id', authMiddleware, requireRole(UserRole.ADMIN), sponsorController.updateSponsor);
router.delete('/:id', authMiddleware, requireRole(UserRole.ADMIN), sponsorController.deleteSponsor);

export default router; 