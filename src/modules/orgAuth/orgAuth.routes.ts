import { Router } from 'express';
import {login} from '../orgAuth/orgAuth.controller'
const router = Router();

router.post('/auth/login', login);


export default router;
