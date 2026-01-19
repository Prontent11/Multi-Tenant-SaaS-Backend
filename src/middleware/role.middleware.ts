import { Response, NextFunction } from 'express';
import { AuthRequest } from './authMiddleware';

export function requireRole(roles: Array<'ADMIN' | 'MANAGER' | 'USER'>) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Insufficient role' });
    }
    next();
  };
}
