import type { MutationResolvers, Product } from './../../../../generated/types.generated.d';
export const productUpdate: NonNullable<
  MutationResolvers['productUpdate']
> = async (_parent, { id, data }, { database }) => {
  return database('products')
    .where({ id })
    .update(data)
    .returning<Product[]>('*')
    .then(([res]: Product[]) => res);
};
