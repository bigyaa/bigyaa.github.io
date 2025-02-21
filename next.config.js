const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ Ensures static export
  assetPrefix: isProd ? "/bigyaa.github.io/" : "", // ✅ Needed for GitHub Pages
  trailingSlash: true, // ✅ Fixes subpage routing on GitHub Pages
  images: { unoptimized: true }, // ✅ Required for static export
};

module.exports = nextConfig;