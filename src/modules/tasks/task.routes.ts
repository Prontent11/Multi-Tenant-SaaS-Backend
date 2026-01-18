import { Router } from 'express';
import { authenticate } from '../../middleware/authMiddleware';
import { requireOrgUser } from '../../middleware/orgAuth.middleware';
import { create, list, updateStatus } from './task.controller';

const router = Router();

router.use(authenticate, requireOrgUser);

router.post('/', create);
router.get('/', list);
router.patch('/:id/status', updateStatus);

export default router;
