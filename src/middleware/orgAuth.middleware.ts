import { Response, NextFunction } from 'express';
import { AuthRequest } from './authMiddleware';
import { prisma } from '../config/prisma';

export async function requireOrgUser(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  if (req.user?.type !== 'ORG_USER') {
    return res.status(403).json({ message: 'Organization user only' });
  }

  // Check if organization is active
  const organization = await prisma.organization.findUnique({
    where: { id: req.user.organizationId },
  });

  if (!organization || organization.status === 'DISABLED') {
    return res.status(403).json({ message: 'Organization is disabled' });
  }

  next();
}
