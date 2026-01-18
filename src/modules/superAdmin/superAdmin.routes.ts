import { Router } from 'express';
import { login } from './superAdmin.controller';
import {
  createOrg,
  changeOrgStatus,
  getOrganizations,
  createOrgAdmin,
} from './organization.controller';
import { authenticate } from '../../middleware/authMiddleware';
import { requireSuperAdmin } from '../../middleware/superAdmin.middleware';

const router = Router();

router.post('/auth/login', login);

router.use(authenticate, requireSuperAdmin);

router.post('/organizations', createOrg);
router.get('/organizations', getOrganizations);
router.patch('/organizations/:id/status', changeOrgStatus);
router.post('/organizations/:id/admin', createOrgAdmin);

export default router;
