/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated.d';
    import    { productAdd as Mutation_productAdd } from './../product/resolvers/Mutation/productAdd';
import    { productDelete as Mutation_productDelete } from './../product/resolvers/Mutation/productDelete';
import    { productUpdate as Mutation_productUpdate } from './../product/resolvers/Mutation/productUpdate';
import    { Product } from './../product/resolvers/Product';
import    { ping as Query_ping } from './../ping/resolvers/Query/ping';
import    { productGet as Query_productGet } from './../product/resolvers/Query/productGet';
import    { productLoad as Query_productLoad } from './../product/resolvers/Query/productLoad';
    export const resolvers: Resolvers = {
      Query: { ping: Query_ping,productGet: Query_productGet,productLoad: Query_productLoad },
      Mutation: { productAdd: Mutation_productAdd,productDelete: Mutation_productDelete,productUpdate: Mutation_productUpdate },
      
      Product: Product
    }