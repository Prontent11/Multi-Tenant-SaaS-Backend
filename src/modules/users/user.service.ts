import bcrypt from 'bcrypt';
import { prisma } from '../../config/prisma';
import { AuthRequest } from '../../middleware/authMiddleware';

export async function createUser(
  organizationId: number,
  email: string,
  password: string,
  role: 'ADMIN' | 'MANAGER' | 'USER'
) {
  const passwordHash = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      passwordHash,
      role,
      organizationId,
    },
  });
}

export async function listUser(organizationId: number) {
return await prisma.user.findMany({
    where: {
      organizationId: organizationId,
      isActive: true,
    },
    select: {
      id: true,
      email: true,
      role: true,
    },
  });
}