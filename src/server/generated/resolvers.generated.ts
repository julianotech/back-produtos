/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated.d';
    import    { AuthPayload } from './../modules/auth/resolvers/AuthPayload';
import    { auth as Mutation_auth } from './../modules/auth/resolvers/Mutation/auth';
import    { productCreate as Mutation_productCreate } from './../modules/products/resolvers/Mutation/productCreate';
import    { productDel as Mutation_productDel } from './../modules/products/resolvers/Mutation/productDel';
import    { productUpdate as Mutation_productUpdate } from './../modules/products/resolvers/Mutation/productUpdate';
import    { Product } from './../modules/products/resolvers/Product';
import    { ping as Query_ping } from './../modules/ping/resolvers/Query/ping';
import    { product as Query_product } from './../modules/products/resolvers/Query/product';
import    { products as Query_products } from './../modules/products/resolvers/Query/products';
import    { user as Query_user } from './../modules/users/resolvers/Query/user';
import    { users as Query_users } from './../modules/users/resolvers/Query/users';
import    { User } from './../modules/users/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { ping: Query_ping,product: Query_product,products: Query_products,user: Query_user,users: Query_users },
      Mutation: { auth: Mutation_auth,productCreate: Mutation_productCreate,productDel: Mutation_productDel,productUpdate: Mutation_productUpdate },
      
      AuthPayload: AuthPayload,
Product: Product,
User: User
    }