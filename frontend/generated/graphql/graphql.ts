/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  shortener: ShortLinkDetails;
};


export type MutationShortenerArgs = {
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  findAll: Array<Maybe<ShortLinkDetails>>;
  shortUrlDetails: ShortLinkDetails;
  urlById: Scalars['String'];
};


export type QueryShortUrlDetailsArgs = {
  id: Scalars['String'];
};


export type QueryUrlByIdArgs = {
  id: Scalars['String'];
};

export type ShortLinkDetails = {
  __typename?: 'ShortLinkDetails';
  clicks: Scalars['Int'];
  createdAt: Scalars['Float'];
  short: Scalars['String'];
  url: Scalars['String'];
};

export type CreateShortLinkMutationMutationVariables = Exact<{
  url: Scalars['String'];
}>;


export type CreateShortLinkMutationMutation = { __typename?: 'Mutation', shortener: { __typename?: 'ShortLinkDetails', clicks: number, short: string, url: string, createdAt: number } };

export type GetUrlByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUrlByIdQuery = { __typename?: 'Query', urlById: string };

export type ShortUrlDetailsQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ShortUrlDetailsQueryQuery = { __typename?: 'Query', shortUrlDetails: { __typename?: 'ShortLinkDetails', url: string, clicks: number, short: string, createdAt: number } };


export const CreateShortLinkMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateShortLinkMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shortener"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clicks"}},{"kind":"Field","name":{"kind":"Name","value":"short"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateShortLinkMutationMutation, CreateShortLinkMutationMutationVariables>;
export const GetUrlByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUrlById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"urlById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<GetUrlByIdQuery, GetUrlByIdQueryVariables>;
export const ShortUrlDetailsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShortUrlDetailsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shortUrlDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"clicks"}},{"kind":"Field","name":{"kind":"Name","value":"short"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ShortUrlDetailsQueryQuery, ShortUrlDetailsQueryQueryVariables>;