import bcrypt from 'bcrypt';
import { prisma } from '../../config/prisma';

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
