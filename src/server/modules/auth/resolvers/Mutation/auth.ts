import { comparePassword } from '@/support/hash';
import type { MutationResolvers } from './../../../../generated/types.generated.d';
import { generateToken } from '@/support/jwt';
import { handleError } from '@/support/errors';
export const auth: NonNullable<MutationResolvers['auth']> = async (
  _parent,
  { email, password },
  { database },
) => {
  const userData = await database('users').where('email', email).first();

  const validPassword = await comparePassword(password, userData.password);
  if (validPassword) {
    return handleError(`Credentials not valid`,'CREDENTIALS_NOT_VALID')
  }

  const token = generateToken({
    name: userData.name,
    id: userData.id,
  });

  return { token };
};
