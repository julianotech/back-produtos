import {
  Product,
  type QueryResolvers,
} from "./../../../generated/types.generated.d";
export const productLoad: NonNullable<QueryResolvers["productLoad"]> = async (
  _parent,
  _arg,
  { database },
): Promise<Product[]> => {
  return database("products").select<Product[]>("*");
};
