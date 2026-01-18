import { prisma } from '../../config/prisma';

export async function createTask(data: {
  title: string;
  description?: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate: Date;
  organizationId: number;
  createdById: number;
  assignedToId: number;
}) {
  return prisma.task.create({ data });
}

export async function getTasksForUser(user: {
  id: number;
  role: string;
  organizationId: number;
}) {
  if (user.role === 'USER') {
    return prisma.task.findMany({
      where: {
        organizationId: user.organizationId,
        assignedToId: user.id,
      },
    });
  }

  return prisma.task.findMany({
    where: { organizationId: user.organizationId },
  });
}
