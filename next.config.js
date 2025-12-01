/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    suppressHydrationWarning: true,
  },
  basePath: "",
  assetPrefix: "",
  trailingSlash: false,
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
};

module.exports = nextConfig;
