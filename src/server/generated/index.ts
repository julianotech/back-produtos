import { typeDefs } from './typeDefs.generated';
import { resolvers } from './resolvers.generated';
import { createSchema, YogaServerOptions } from 'graphql-yoga';
import { constructCtx } from '../context';
import type { Context } from '../contracts';

export default {
  schema: createSchema({ resolvers, typeDefs }),
  context: constructCtx(),
} as YogaServerOptions<Context, {}>;
