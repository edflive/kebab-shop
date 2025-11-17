module.exports = {
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      defaultLimit: 100,
      maxLimit: 500,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
