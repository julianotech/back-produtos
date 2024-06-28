import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../contracts';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  productDelete: Scalars['Boolean']['output'];
  productUpdate: Product;
};


export type MutationProductDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductUpdateArgs = {
  dados: ProductInput;
  id: Scalars['ID']['input'];
};

export type Product = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  stock: Scalars['Int']['output'];
};

export type ProductInput = {
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  stock: Scalars['Int']['input'];
};

export type Query = {
  ping: Scalars['String']['output'];
  productGet: Product;
  productLoad: Array<Product>;
};


export type QueryPingArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductGetArgs = {
  id: Scalars['ID']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Product: ResolverTypeWrapper<Product>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ProductInput: ProductInput;
  Query: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Mutation: {};
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Product: Product;
  String: Scalars['String']['output'];
  Int: Scalars['Int']['output'];
  ProductInput: ProductInput;
  Query: {};
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  productDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationProductDeleteArgs, 'id'>>;
  productUpdate?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationProductUpdateArgs, 'dados' | 'id'>>;
};

export type ProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  ping?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<QueryPingArgs>>;
  productGet?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryProductGetArgs, 'id'>>;
  productLoad?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

