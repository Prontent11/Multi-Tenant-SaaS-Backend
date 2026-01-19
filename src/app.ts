import superAdminRoutes from './modules/superAdmin/superAdmin.routes';
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import orgAuthRoutes from './modules/orgAuth/orgAuth.routes'
import userRoutes from './modules/users/user.routes'
import taskRoutes from './modules/tasks/task.routes'
const app: Application = express();

//Global Middleware
app.use(cors());
app.use(express.json());

// Health Check Route 
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

// Super Admin Routes 

app.use('/api/super-admin', superAdminRoutes);

// Org Routes 

app.use('/api/org', orgAuthRoutes);

//User Routes
app.use('/api/org/users', userRoutes);

//Task Routes
app.use('/api/org/tasks', taskRoutes);


// 404 Request
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});


// Centralized Error Handler 
app.use(
  (err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);

    const status = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({ message });
  }
);

export default app;
