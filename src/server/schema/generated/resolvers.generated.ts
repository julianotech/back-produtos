/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated.d';
    import    { createProduct as Mutation_createProduct } from './../product/resolvers/Mutation/createProduct';
import    { Product } from './../product/resolvers/Product';
import    { ping as Query_ping } from './../ping/resolvers/Query/ping';
import    { products as Query_products } from './../product/resolvers/Query/products';
    export const resolvers: Resolvers = {
      Query: { ping: Query_ping,products: Query_products },
      Mutation: { createProduct: Mutation_createProduct },
      
      Product: Product
    }