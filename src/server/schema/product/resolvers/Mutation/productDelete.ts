import type { MutationResolvers } from "./../../../generated/types.generated.d";
export const productDelete: NonNullable<
  MutationResolvers["productDelete"]
> = async (_parent, { id }, { database}) => {
  return database("products").where({ id }).del().then(affectedRows => affectedRows > 0);
};
