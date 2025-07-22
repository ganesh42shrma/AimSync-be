import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);
router.post('/reset-password', authController.resetPassword);

export default router;
