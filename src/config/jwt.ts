import jwt from 'jsonwebtoken'
import {JWT_SECRET} from './env'

export interface SuperAdminToken{
    id:number,
    type:"SUPER_ADMIN"
}

export function signSuperAdminToken(payload: SuperAdminToken) {
  return jwt.sign(payload, JWT_SECRET as string, { expiresIn: '2h' });
}
export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET as string);
}