// import { readFileSync } from "fs";
import {typeDefs} from './typeDefs.generated'
import {resolvers} from './resolvers.generated'
import { createSchema } from "graphql-yoga";


export default {
   schema: createSchema({ resolvers, typeDefs}) 
}