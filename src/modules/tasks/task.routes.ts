import { Router } from 'express';
import { authenticate } from '../../middleware/authMiddleware';
import { requireOrgUser } from '../../middleware/orgAuth.middleware';
import { requireRole } from '../../middleware/role.middleware';
import{ createTask,
  listTasks,
  updateTaskStatus,
  updateTaskDetails,
} from './task.controller';

const router = Router();


router.post(
  '/',
  authenticate,
  requireOrgUser,
  requireRole(['ADMIN', 'MANAGER']),
  createTask
);


router.get(
  '/',
  authenticate,
  requireOrgUser,
  listTasks
);


router.patch(
  '/:id/status',
  authenticate,
  requireOrgUser,
  updateTaskStatus
);


router.patch(
  '/:id',
  authenticate,
  requireOrgUser,
  requireRole(['ADMIN', 'MANAGER']),
  updateTaskDetails
);

export default router;
