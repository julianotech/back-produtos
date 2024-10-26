import type { MutationResolvers, Product } from './../../../../generated/types.generated.d';
export const productUpdate: NonNullable<
  MutationResolvers['productUpdate']
> = async (_parent, { id, data }, { database }) => {
  return database('products')
    .where({ id })
    .update(data)
    .returning<Product[]>('*')
    .then((res: Product[] | undefined) => {

      console.log({ res });
      if (!res) {
        return Promise.reject(new Error('Product not found'));
      }
      return res.at(0);
    });
};
