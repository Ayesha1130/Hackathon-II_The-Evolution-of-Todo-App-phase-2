/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // 🔥 Build ke time ESLint errors ignore kare
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        // Humne yahan 8001 ko hata kar 8000 kar diya hai
        destination: 'http://127.0.0.1:8000/api/v1/:path*',
      },
    ]
  },
}

module.exports = nextConfig
