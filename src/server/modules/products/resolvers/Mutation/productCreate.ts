import type { MutationResolvers } from './../../../../generated/types.generated.d';
export const productCreate: NonNullable<
  MutationResolvers['productCreate']
> = async (_parent, { data }, { database }) => {
  return database('products').insert(data).returning('*').then(([res]) => res); 
  // console.log({ qb: qb.toString() });
  return qb
};
