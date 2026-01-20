import { Router } from 'express';
import { createOrgUser,listOrgUsers } from './user.controller';
import { authenticate } from '../../middleware/authMiddleware';
import { requireOrgUser } from '../../middleware/orgAuth.middleware';
import { requireRole } from '../../middleware/role.middleware';
const router = Router();

router.use(authenticate, requireOrgUser);
router.get('/', listOrgUsers);
router.post('/',  requireRole(['ADMIN']),createOrgUser);

export default router;
