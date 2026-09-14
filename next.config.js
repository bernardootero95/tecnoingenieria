/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'tecnoingenieriabo.com',
        'www.tecnoingenieriabo.com',
      ],
    },
  },
}

module.exports = nextConfig
