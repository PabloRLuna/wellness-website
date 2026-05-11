/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/wellness-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/wellness-website' : '',
}

module.exports = nextConfig
