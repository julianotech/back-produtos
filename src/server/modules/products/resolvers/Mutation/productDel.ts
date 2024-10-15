import type { MutationResolvers } from './../../../../generated/types.generated.d';
export const productDel: NonNullable<MutationResolvers['productDel']> = async (
  _parent,
  { id },
  { database },
) => {
  return database('products').where({ id }).del().returning('*').then(([res]) => res); ;
};
