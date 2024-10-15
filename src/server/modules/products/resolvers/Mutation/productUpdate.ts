import type { MutationResolvers } from './../../../../generated/types.generated.d';
export const productUpdate: NonNullable<
  MutationResolvers['productUpdate']
> = async (_parent, { id, data }, { database }) => {
  return database('products').where({ id }).update(data).returning('*').then(([res]) => res);
};
