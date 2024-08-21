import type { QueryResolvers } from './../../../generated/types.generated.d';
export const users: NonNullable<QueryResolvers['users']> = async (
  _parent,
  _arg,
  { database },
) => {
  return await database('users');
};
