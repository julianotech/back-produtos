import type { MutationResolvers, Product } from './../../../../generated/types.generated.d';
export const productCreate: NonNullable<
  MutationResolvers['productCreate']
> = async (_parent, { data }, { database }) => {
  return database('products')
    .insert(data)
    .returning<Product[]>('*')
    .then((res: Product[] | undefined) => {
      if (!res) {
        return Promise.reject(new Error('Product not found'));
      }
      return res.at(0);
    });
};
