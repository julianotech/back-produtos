import type { QueryResolvers } from './../../../generated/types.generated.d';
export const user: NonNullable<QueryResolvers['user']> = async (
  _parent,
  _arg,
  { database },
) => {
  return database('users').first();
};
