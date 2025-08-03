import { Router } from 'express';
import {
  getAllBugs,
  getBugById,
  createBug,
  updateBug,
  deleteBug
} from '../controllers/bugs.controller';

const router = Router();

router.get('/', getAllBugs);
router.get('/:id', getBugById);
router.post('/', createBug);
router.put('/:id', updateBug);
router.patch('/:id', updateBug);
router.delete('/:id', deleteBug);

export default router;