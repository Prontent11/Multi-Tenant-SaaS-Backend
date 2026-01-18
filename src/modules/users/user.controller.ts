import { Response } from 'express';
import { AuthRequest } from '../../middleware/authMiddleware';
import { createUser } from './user.service';

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
