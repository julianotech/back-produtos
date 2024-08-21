/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated.d';
    import    { ping as Query_ping } from './../ping/resolvers/Query/ping';
import    { users as Query_users } from './../users/resolvers/Query/users';
import    { User } from './../users/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { ping: Query_ping,users: Query_users },
      
      
      User: User
    }