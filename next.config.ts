import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'standalone',
  distDir: 'build',
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['picsum.photos'],
    unoptimized: true,
  },
  assetPrefix: isProd ? 'https://elilv21.github.io/DemoApp/' : '',
  basePath: isProd ? '/demo-app' : '',
  env: {},
};

export default nextConfig;
