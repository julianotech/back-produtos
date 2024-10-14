import type { QueryResolvers } from './../../../generated/types.generated.d';
export const ping: NonNullable<QueryResolvers['ping']> = async () => {
  return 'pong';
};
