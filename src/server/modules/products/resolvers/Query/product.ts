import type { QueryResolvers } from './../../../../generated/types.generated.d';
export const product: NonNullable<QueryResolvers['product']> = async (
  _parent,
  { id },
  { database },
) => {
  return database('products').where({ id }).first();
};
