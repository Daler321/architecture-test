import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  cache: new InMemoryCache(),
});
// https://r810983k-1337.euw.devtunnels.ms/graphql

export default client;
