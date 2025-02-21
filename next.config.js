const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "/bigyaa.github.io/" : "", // ✅ Fixes GitHub Pages paths
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;