import type { Product, QueryResolvers } from "./../../../generated/types.generated.d";
export const productGet: NonNullable<QueryResolvers["productGet"]> = async (
  _parent,
  { id },
  { database},
) => {
  return database("products")
    .where({ id })
    .first<Product>()
    .then((product: Product | undefined): Product => {
      if (!product) {
        throw new Error(`Product with id ${id} not found`);
      }
      return product;
    });
};
