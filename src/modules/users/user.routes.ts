import { Router } from 'express';
import { createOrgUser } from './user.controller';
import { authenticate } from '../../middleware/authMiddleware';
import { requireOrgUser } from '../../middleware/orgAuth.middleware';
import { requireRole } from '../../middleware/role.middleware';

const router = Router();

router.use(authenticate, requireOrgUser, requireRole(['ADMIN']));
router.post('/', createOrgUser);

export default router;
