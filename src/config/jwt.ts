import jwt from 'jsonwebtoken'
import {JWT_SECRET} from './env'

export interface SuperAdminToken{
    id:number,
    type:"SUPER_ADMIN"
}

export interface OrgUserToken {
  id: number;
  organizationId: number;
  role: 'ADMIN' | 'MANAGER' | 'USER';
  type: 'ORG_USER';
}

export function signOrgUserToken(payload: OrgUserToken) {
  return jwt.sign(payload, JWT_SECRET as string, { expiresIn: '2h' });
}

export function signSuperAdminToken(payload: SuperAdminToken) {
  return jwt.sign(payload, JWT_SECRET as string, { expiresIn: '2h' });
}
export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET as string);
}