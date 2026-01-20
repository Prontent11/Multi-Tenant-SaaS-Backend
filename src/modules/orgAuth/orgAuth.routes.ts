import { Router } from 'express';
import { login, getOrganization } from '../orgAuth/orgAuth.controller';
import { authenticate } from '../../middleware/authMiddleware';
import { requireOrgUser } from '../../middleware/orgAuth.middleware';

const router = Router();

router.post('/auth/login', login);
router.get('/info', authenticate, requireOrgUser, getOrganization);

export default router;
