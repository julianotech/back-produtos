import { GraphQLError } from "graphql";

export function handleError(message: string, code: string): Promise<Error> {
  const opts = { extensions: { code } };

  return Promise.reject(new GraphQLError(message, opts)) as unknown as Promise<Error>;
}