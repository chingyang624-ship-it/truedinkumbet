/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",  // Temporarily disabled for debugging
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
};

module.exports = nextConfig;
