import { Router } from 'express';
import healthRoutes from './health.routes';
import bugsRoutes from './bugs.routes';

const router = Router();

router.use('/', healthRoutes);
router.use('/bugs', bugsRoutes);

// Future routes
// router.use('/users', usersRoutes);
// router.use('/projects', projectsRoutes);
// router.use('/teams', teamsRoutes);

export default router;