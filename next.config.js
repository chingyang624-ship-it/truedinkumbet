/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
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
