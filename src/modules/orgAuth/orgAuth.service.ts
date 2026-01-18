import bcrypt from 'bcrypt';
import { prisma } from '../../config/prisma';

export async function authenticateOrgUser(
  email: string,
  password: string
) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.isActive) return null;

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return null;

  return user;
}
