/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
    ],
  },
  onDemandEntries: {
    maxInactiveAge: 120000,
    pagesBufferLength: 5,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
