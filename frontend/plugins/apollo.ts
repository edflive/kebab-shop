import { ApolloClient, InMemoryCache } from '@apollo/client/core';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const apolloClient = new ApolloClient({
    uri: config.public.graphqlEndpoint,
    cache: new InMemoryCache(),
  });

  return {
    provide: {
      apollo: apolloClient,
    },
  };
});
