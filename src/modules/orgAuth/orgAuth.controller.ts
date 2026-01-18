import { Request, Response } from 'express';
import { authenticateOrgUser } from './orgAuth.service';
import { signOrgUserToken } from '../../config/jwt';

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await authenticateOrgUser(email, password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = signOrgUserToken({
    id: user.id,
    organizationId: user.organizationId,
    role: user.role,
    type: 'ORG_USER',
  });

  res.status(200).json({ token });
}
