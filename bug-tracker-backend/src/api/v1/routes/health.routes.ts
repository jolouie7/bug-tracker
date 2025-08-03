import { Router } from 'express';
import { healthCheck, getApiInfo } from '../controllers/health.controller';

const router = Router();

router.get('/health', healthCheck);
router.get('/info', getApiInfo);

export default router;