import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['picsum.photos'],
  },
  assetPrefix: 'https://elilv21.github.io/DemoApp/',
  basePath: '/DemoApp',
};

export default nextConfig;
