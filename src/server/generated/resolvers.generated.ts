/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.d';
import { ping as Query_ping } from './../modules/ping/resolvers/Query/ping';
import { user as Query_user } from './../modules/users/resolvers/Query/user';
import { users as Query_users } from './../modules/users/resolvers/Query/users';
import { User } from './../modules/users/resolvers/User';
export const resolvers: Resolvers = {
  Query: { ping: Query_ping, user: Query_user, users: Query_users },

  User: User,
};
