import { Response } from 'express';
import { AuthRequest } from '../../middleware/authMiddleware';
import { createTask, getTasksForUser } from './task.service';
import { prisma } from '../../config/prisma';
import { isValidStatusTransition } from './task.rule';

export async function create(req: AuthRequest, res: Response) {
  const { title, description, priority, dueDate, assignedToId } = req.body;

  if (!['ADMIN', 'MANAGER'].includes(req.user.role)) {
    return res.status(403).json({ message: 'Not allowed' });
  }

  const task = await createTask({
    title,
    description,
    priority,
    dueDate: new Date(dueDate),
    organizationId: req.user.organizationId,
    createdById: req.user.id,
    assignedToId,
  });

  res.status(201).json(task);
}

export async function list(req: AuthRequest, res: Response) {
  const tasks = await getTasksForUser(req.user);
  res.status(200).json(tasks);
}

export async function updateStatus(req: AuthRequest, res: Response) {
  const taskId = Number(req.params.id);
  const { status } = req.body;

  const task = await prisma.task.findUnique({ where: { id: taskId } });
  if (!task || task.organizationId !== req.user.organizationId) {
    return res.status(404).json({ message: 'Task not found' });
  }

  if (!isValidStatusTransition(task.status, status)) {
    return res.status(403).json({ message: 'Invalid status transition' });
  }

  const isCreator = task.createdById === req.user.id;
  const isAssignee = task.assignedToId === req.user.id;

  if (
    status === 'COMPLETED' &&
    !(isCreator || isAssignee)
  ) {
    return res.status(403).json({ message: 'Not allowed' });
  }

  if (status === 'REOPENED' && !isCreator) {
    return res.status(403).json({ message: 'Only creator can reopen' });
  }

  const updated = await prisma.task.update({
    where: { id: taskId },
    data: { status },
  });

  res.status(200).json(updated);
}
