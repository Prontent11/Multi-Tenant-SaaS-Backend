import 'dotenv/config'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '../../prisma/generated/prisma'
import { DATABASE_HOST,DATABASE_NAME,DATABASE_PASSWORD,DATABASE_PORT,DATABASE_USER } from './env'

const adapter = new PrismaMariaDb(
  {
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password:DATABASE_PASSWORD,
  database: DATABASE_NAME,
  connectionLimit: 5
  }
)
export const prisma = new PrismaClient({ adapter })