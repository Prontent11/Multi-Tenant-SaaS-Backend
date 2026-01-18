import { TaskStatus } from '@prisma/client';

export function isValidStatusTransition(
  current: TaskStatus,
  next: TaskStatus
): boolean {
  const transitions: Record<TaskStatus, TaskStatus[]> = {
    OPEN: ['IN_PROGRESS'],
    IN_PROGRESS: ['COMPLETED'],
    COMPLETED: ['REOPENED'],
    REOPENED: ['IN_PROGRESS'],
  };

  return transitions[current]?.includes(next) ?? false;
}
