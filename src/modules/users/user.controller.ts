import { Response } from 'express';
import { AuthRequest } from '../../middleware/authMiddleware';
import { createUser,listUser } from './user.service';

export async function createOrgUser(req: AuthRequest, res: Response) {
  const { email, password, role } = req.body;

  const user = await createUser(
    req.user.organizationId,
    email,
    password,
    role
  );

  res.status(201).json(user);
}

export async function listOrgUsers(req: AuthRequest, res: Response) {
  const users = await listUser(req.user.organizationId);
  res.status(200).json(users);
}

