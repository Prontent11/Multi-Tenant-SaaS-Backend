import bcrypt from 'bcrypt';
import { prisma } from '../../config/prisma';

export async function authenticateSuperAdmin(
  email: string,
  password: string
) {
console.log("authenticating admin ..")
  const admin = await prisma.superAdmin.findUnique({ where: { email } });

  if (!admin || !admin.isActive) return null;

  const match = await bcrypt.compare(password, admin.passwordHash);
  if (!match) return null;

  return admin;
}
