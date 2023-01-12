/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ALGOLIA_ADMIN_API_KEY: process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY
  }
}

module.exports = nextConfig

