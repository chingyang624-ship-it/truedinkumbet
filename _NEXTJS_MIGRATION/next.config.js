/** @type {import('next').NextConfig} */
// Configuration for static export to GitHub Pages
const nextConfig = {
  output: "export",
  basePath: "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
      {
        protocol: "https",
        hostname: "static.gwvkyk.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: false,
    cpus: 1,
  },
  swcMinify: true,
  optimizeFonts: false,
};

module.exports = nextConfig;
