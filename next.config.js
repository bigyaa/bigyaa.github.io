module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.cache = false; // Disable Webpack caching
      }
      return config;
    },
  };