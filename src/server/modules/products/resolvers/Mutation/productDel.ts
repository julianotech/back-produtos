import type {
  MutationResolvers,
  Product,
} from './../../../../generated/types.generated.d';
export const productDel: NonNullable<MutationResolvers['productDel']> = async (
  _parent,
  { id },
  { database },
) => {
  return database('products')
    .where({ id })
    .del()
    .returning<Product[]>('*')
    .then((res: Product[] | undefined) => {
      if (!res) {
        return Promise.reject(new Error('Product not found'));
      }
      return res.at(0);
    });
};
