const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/bigyaa.github.io" : "",
  assetPrefix: isProd ? "/bigyaa.github.io/" : "",
  trailingSlash: true,
  images: { unoptimized: true },
  webpack: (config) => {
    config.output.publicPath = isProd ? "/bigyaa.github.io/.next/" : "/.next/";
    return config;
  },
};

module.exports = nextConfig;