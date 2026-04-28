import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export for zero-server cost deploy
  output: 'export',
  trailingSlash: true,
  images: {
    // Required for static export
    unoptimized: true,
  },
}

export default nextConfig
