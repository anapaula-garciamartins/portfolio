import type { NextConfig } from 'next';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withVercelToolbar = require('@vercel/toolbar/plugins/next')();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withVercelToolbar(nextConfig);
