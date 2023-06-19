const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: '_static',
  images: {
    unoptimized: true
  }
}

module.exports = withContentlayer(nextConfig)