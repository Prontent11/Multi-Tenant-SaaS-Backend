import { Router } from 'express';
import { login } from './superAdmin.controller';

const router = Router();

router.post('/auth/login', login);

export default router;
