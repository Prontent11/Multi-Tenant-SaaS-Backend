import bcrypt from 'bcrypt';
import { prisma } from '../../config/prisma';

export async function createOrganization(name: string) {
  return prisma.organization.create({
    data: { name },
  });
}

export async function updateOrganizationStatus(
  id: number,
  status: 'ACTIVE' | 'DISABLED'
) {
  return prisma.organization.update({
    where: { id },
    data: { status },
  });
}

export async function listOrganizations() {
  return prisma.organization.findMany({
    select: {
      id: true,
      name: true,
      status: true,
      createdAt: true,
    },
  });
}

export async function createOrganizationAdmin(
  organizationId: number,
  email: string,
  password: string
) {
  const passwordHash = await bcrypt.hash(password, 10);

  return prisma.organizationAdmin.create({
    data: {
      email,
      passwordHash,
      organizationId,
    },
  });
}
