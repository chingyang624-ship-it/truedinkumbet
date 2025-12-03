/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export to fix build timeout
  // Using ISR (Incremental Static Regeneration) instead
  basePath: "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
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
  },
  // Optimize build performance
  swcMinify: true,
  compress: true,
};

module.exports = nextConfig;
