import type { QueryResolvers } from './../../../../generated/types.generated.d';
export const products: NonNullable<QueryResolvers['products']> = async (
  _parent,
  _arg,
  { database },
) => {
  return database('products').select('*');
};
