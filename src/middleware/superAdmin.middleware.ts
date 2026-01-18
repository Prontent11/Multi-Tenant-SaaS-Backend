import { Response, NextFunction } from 'express';
import { AuthRequest } from './authMiddleware'

export function requireSuperAdmin(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  if (req.user?.type !== 'SUPER_ADMIN') {
    return res.status(403).json({ message: 'Super Admin only' });
  }
  next();
}
