import { prisma } from '../../config/prisma';
import { TaskPriority,TaskStatus } from '../../../prisma/generated/prisma';
import { sendEmail } from '../notifications/email.service';
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
  console.log('User',user)
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

  const task = await prisma.task.create({
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
  //   await sendEmail(
  //   `${task.assignedToId}`,
  //   'New Task Assigned',
  //   `A new task "${task.title}" has been created and assigned to you.`
  // );
  return task;
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

  const data =await prisma.task.update({
    where: { id: taskId },
    data: { status },
  });
  // await sendEmail(
  //   `${task.assignedToId};${task.createdById}`,
  //   `Task "${task.title}" status updated to ${status}`,
  //   `The status of task "${task.title}" has been updated to ${status}.`
  // );
  return data;
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
