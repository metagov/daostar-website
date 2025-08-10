import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/reports/:path*',
        destination: '/research/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
