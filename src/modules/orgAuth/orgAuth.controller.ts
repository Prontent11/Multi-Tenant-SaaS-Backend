import { Request, Response } from 'express';
import { authenticateOrgUser } from './orgAuth.service';
import { signOrgUserToken } from '../../config/jwt';
import { AuthRequest } from '../../middleware/authMiddleware';
import { prisma } from '../../config/prisma';

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await authenticateOrgUser(email, password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = signOrgUserToken({
    id: user.id,
    organizationId: user.organizationId,
    role: user.role,
    type: 'ORG_USER',
  });

  res.status(200).json({ token });
}

export async function getOrganization(req: AuthRequest, res: Response) {
  try {
    const org = await prisma.organization.findUnique({
      where: { id: req.user.organizationId },
      select: {
        id: true,
        name: true,
        status: true,
        createdAt: true,
      },
    });

    if (!org) {
      return res.status(404).json({ message: 'Organization not found' });
    }

    res.status(200).json(org);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch organization' });
  }
}
