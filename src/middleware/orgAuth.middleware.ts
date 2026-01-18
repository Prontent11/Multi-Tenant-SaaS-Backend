import { Response, NextFunction } from 'express';
import { AuthRequest } from './authMiddleware';
export function requireOrgUser(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  if (req.user?.type !== 'ORG_USER') {
    return res.status(403).json({ message: 'Organization user only' });
  }
  next();
}
