import express from 'express';
import * as pingController from '../controllers/ping.controller';

const router = express.Router();

router.get('/', pingController.ping);

export default router;