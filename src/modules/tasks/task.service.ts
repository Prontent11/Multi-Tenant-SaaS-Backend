import { prisma } from '../../config/prisma';
import { TaskPriority,TaskStatus } from '../../../prisma/generated/prisma';
type OrgUser = {
  id: number;
  role: 'ADMIN' | 'MANAGER' | 'USER';
  organizationId: number;
};

type CreateTaskInput = {
  title: string;
  description?: string;
  priority: TaskPriority;
  dueDate: string;
  assignedToId: number;
};

type UpdateTaskInput = {
  title?: string;
  description?: string;
  priority?: TaskPriority;
  dueDate?: string;
};


export async function listTasks(user: OrgUser) {
  if (user.role === 'USER') {
    return prisma.task.findMany({
      where: {
        organizationId: user.organizationId,
        assignedToId: user.id,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  return prisma.task.findMany({
    where: { organizationId: user.organizationId },
    orderBy: { createdAt: 'desc' },
  });
}


export async function createTask(
  user: OrgUser,
  input: CreateTaskInput
) {
  if (user.role === 'USER') {
    throw new Error('FORBIDDEN');
  }

  const assignee = await prisma.user.findFirst({
    where: {
      id: input.assignedToId,
      organizationId: user.organizationId,
      isActive: true,
    },
  });

  if (!assignee) {
    throw new Error('INVALID_ASSIGNEE');
  }

  return prisma.task.create({
    data: {
      title: input.title,
      description: input.description,
      priority: input.priority,
      dueDate: new Date(input.dueDate),
      organizationId: user.organizationId,
      createdById: user.id,
      assignedToId: input.assignedToId,
    },
  });
}


export async function updateTaskStatus(
  user: OrgUser,
  taskId: number,
  status: TaskStatus
) {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task || task.organizationId !== user.organizationId) {
    throw new Error('NOT_FOUND');
  }

  // USER can only update assigned task
  if (user.role === 'USER' && task.assignedToId !== user.id) {
    throw new Error('FORBIDDEN');
  }

  // Only creator can reopen
  if (status === 'REOPENED' && task.createdById !== user.id) {
    throw new Error('FORBIDDEN');
  }

  return prisma.task.update({
    where: { id: taskId },
    data: { status },
  });
}


export async function updateTaskDetails(
  user: OrgUser,
  taskId: number,
  input: UpdateTaskInput
) {
  if (user.role === 'USER') {
    throw new Error('FORBIDDEN');
  }

  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task || task.organizationId !== user.organizationId) {
    throw new Error('NOT_FOUND');
  }

  return prisma.task.update({
    where: { id: taskId },
    data: {
      title: input.title,
      description: input.description,
      priority: input.priority,
      dueDate: input.dueDate ? new Date(input.dueDate) : undefined,
    },
  });
}


export async function deleteTask(user: OrgUser, taskId: number) {
  if (user.role !== 'ADMIN') {
    throw new Error('FORBIDDEN');
  }

  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task || task.organizationId !== user.organizationId) {
    throw new Error('NOT_FOUND');
  }

  await prisma.task.delete({ where: { id: taskId } });
}
