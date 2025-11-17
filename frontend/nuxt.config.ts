// Minimal Nuxt 3 config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost/api',
      graphqlEndpoint: process.env.NUXT_PUBLIC_GRAPHQL || 'http://localhost/api/graphql',
    },
  },
});
