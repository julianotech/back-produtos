import { Product, type MutationResolvers } from "./../../../generated/types.generated.d";

interface UpdatedValues {
  price: number;
  stock: number;
  name: string;
}

const getOnlyProduct = (dados: any): UpdatedValues => ({ 
  price: dados.price,
  stock: dados.stock,
  name: dados.name,
});

export const productUpdate: NonNullable<
  MutationResolvers["productUpdate"]
> = async (_parent, { id, dados  }, { database }) => {
  const data = getOnlyProduct(dados);
  return database('products').where({ id }).update(data).returning<Product>('*');
};
