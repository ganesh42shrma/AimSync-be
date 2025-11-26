import express from 'express';
import * as userController from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';
import { UserRole } from '../constants/enums';

const router = express.Router();

router.use(authMiddleware);
router.post('/', requireRole(UserRole.ADMIN), userController.createUser);
router.get('/', requireRole(UserRole.ADMIN, UserRole.USER), userController.getAllUsers);
router.get('/me', userController.getMe);
router.get('/:id', requireRole(UserRole.ADMIN, UserRole.USER), userController.getUserById);
router.put('/:id', requireRole(UserRole.ADMIN), userController.updateUser);
router.delete('/:id', requireRole(UserRole.ADMIN), userController.deleteUser);

export default router;
