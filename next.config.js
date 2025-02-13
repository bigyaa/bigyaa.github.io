/** @type {import('next').NextConfig} */
const nextConfig = {
  // Correctly set the basePath for GitHub Pages
  basePath: process.env.GITHUB_ACTIONS ? '/bigyaa.github.io' : '',

  output: 'export', // ✅ Required for static exports (GitHub Pages)
  trailingSlash: true, // ✅ Ensures URLs work correctly

  images: {
    unoptimized: true, // ✅ Required because GitHub Pages doesn’t support Next.js image optimization
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 30000, // Default is 30 KB (good for performance)
        maxSize: 250000, // Avoids too many small chunks
      };
    }
    return config;
  },
};

module.exports = nextConfig;