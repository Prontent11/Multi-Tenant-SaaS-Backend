import cron from 'node-cron';
import { prisma } from '../../../config/prisma';
import { sendEmail } from '../email.service';
import { TaskStatus } from '../../../../prisma/generated/prisma';

export function startTaskReminderJob() {
  // Runs every day at 09:00 AM
  cron.schedule('0 9 * * *', async () => {
    console.log('[CRON] Running daily overdue task reminder job');

    const overdueTasks = await prisma.task.findMany({
      where: {
        dueDate: { lt: new Date() },
        status: { not: TaskStatus.COMPLETED },
      },
      include: {
        assignedTo: true,
      },
    });

    for (const task of overdueTasks) {
      await sendEmail(
        task.assignedTo.email,
        'Task Overdue Reminder',
        `Task "${task.title}" was due on ${task.dueDate.toDateString()}. Please take action.`
      );
    }
  });
}
