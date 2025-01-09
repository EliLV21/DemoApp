import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production' && process.env.DEPLOY_ENV === 'github-pages';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['picsum.photos'],
    unoptimized: true,
  },
  assetPrefix: isProd ? 'https://elilv21.github.io/DemoApp/' : '',
  basePath: isProd ? '/DemoApp/' : '',
  env: {},
};

export default nextConfig;
