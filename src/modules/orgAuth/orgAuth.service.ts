import bcrypt from 'bcrypt';
import { prisma } from '../../config/prisma';

export async function authenticateOrgUser(
  email: string,
  password: string
) {
  const user = await prisma.user.findUnique({ 
    where: { email },
    include: { organization: true }
  });
  
  if (!user || !user.isActive) return null;

  // Check if organization is active
  if (!user.organization || user.organization.status === 'DISABLED') return null;

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return null;

  return user;
}
