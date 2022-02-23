import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://graphql.sketch.cloud/api',
  cache: new InMemoryCache(),
})
