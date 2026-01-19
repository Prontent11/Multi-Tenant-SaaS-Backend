import { Response } from 'express';
import { AuthRequest } from '../../middleware/authMiddleware';
import * as taskService from './task.service';

export async function listTasks(req: AuthRequest, res: Response) {
  const tasks = await taskService.listTasks(req.user);
  res.status(200).json(tasks);
}


export async function createTask(req: AuthRequest, res: Response) {
  try {
    const task = await taskService.createTask(req.user, req.body);
    res.status(201).json(task);
  } catch (err: any) {
    if (err.message === 'FORBIDDEN') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    if (err.message === 'INVALID_ASSIGNEE') {
      return res.status(400).json({ message: 'Invalid assignee' });
    }
    throw err;
  }
}


export async function updateTaskStatus(req: AuthRequest, res: Response) {
  try {
    const taskId = Number(req.params.id);
    const { status } = req.body;

    const updated = await taskService.updateTaskStatus(
      req.user,
      taskId,
      status
    );

    res.status(200).json(updated);
  } catch (err: any) {
    if (err.message === 'FORBIDDEN') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    if (err.message === 'NOT_FOUND') {
      return res.status(404).json({ message: 'Task not found' });
    }
    throw err;
  }
}


export async function updateTaskDetails(req: AuthRequest, res: Response) {
  try {
    const taskId = Number(req.params.id);

    const updated = await taskService.updateTaskDetails(
      req.user,
      taskId,
      req.body
    );

    res.status(200).json(updated);
  } catch (err: any) {
    if (err.message === 'FORBIDDEN') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    if (err.message === 'NOT_FOUND') {
      return res.status(404).json({ message: 'Task not found' });
    }
    throw err;
  }
}


export async function deleteTask(req: AuthRequest, res: Response) {
  try {
    const taskId = Number(req.params.id);
    await taskService.deleteTask(req.user, taskId);
    res.status(204).send();
  } catch (err: any) {
    if (err.message === 'FORBIDDEN') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    if (err.message === 'NOT_FOUND') {
      return res.status(404).json({ message: 'Task not found' });
    }
    throw err;
  }
}
