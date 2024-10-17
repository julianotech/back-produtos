import type { MutationResolvers, Product } from './../../../../generated/types.generated.d';
export const productCreate: NonNullable<
  MutationResolvers['productCreate']
> = async (_parent, { data }, { database }) => {
  return database('products')
    .insert(data)
    .returning<Product[]>('*')
    .then(([res]: Product[]) => res);
};
