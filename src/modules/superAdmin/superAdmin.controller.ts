import { Request, Response } from 'express';
import { authenticateSuperAdmin } from './superAdmin.service';
import { signSuperAdminToken } from '../../config/jwt';

export async function login(req: Request, res: Response) {
    console.log("Request Recieved")
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }
    
    const admin = await authenticateSuperAdmin(email, password);
    console.log("Authenticated",admin)

  if (!admin) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = signSuperAdminToken({
    id: admin.id,
    type: 'SUPER_ADMIN',
  });

  res.status(200).json({ token });
}
