import { Response } from 'express';
import { AuthRequest } from '../../middleware/authMiddleware';
import { createUser,listUser } from './user.service';
import { prisma } from '../../config/prisma';

export async function createOrgUser(req: AuthRequest, res: Response) {
  const { email, password, role } = req.body;
  const userExists = await prisma.user.findUnique({
    where: { email },
  });
  if(userExists) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }
  const user = await createUser(
    req.user.organizationId,
    email,
    password,
    role
  );

  res.status(201).json(user);
}

export async function listOrgUsers(req: AuthRequest, res: Response) {
  console.log('Listing users for organization:', req.user.organizationId);
  const users = await listUser(req.user.organizationId);

  res.status(200).json(users);
}

