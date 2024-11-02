import { sign } from 'jsonwebtoken';

import { env } from '@/infra/config';

export function generateToken(payload: Record<string, any>): string {
  return sign(payload, env.jwtSecret, {
    expiresIn: '2h',
  });
}
