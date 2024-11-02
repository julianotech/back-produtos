import { hash, compare } from 'bcrypt';
const saltOrRounds = 10;

export async function hashPassword(password: string): Promise<string> {
  return await hash(password, saltOrRounds);
}

export async function comparePassword(
  password: string,
  hashPassword: string,
): Promise<boolean> {
  return await compare(password, hashPassword);
}
