/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use basePath if your repository is NOT named bigyaa.github.io
  basePath: process.env.GITHUB_ACTIONS ? '/bigyaa.github.io' : '',

  output: 'standalone', // Correct if using `next export`, otherwise use 'standalone'
  trailingSlash: true, // Ensures correct routing on GitHub Pages

  images: {
    unoptimized: true, // Required for GitHub Pages
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Webpack caching should not be disabled unless necessary
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 50000,
      };
    }
    return config;
  },
};

module.exports = nextConfig;