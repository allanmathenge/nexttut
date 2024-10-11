/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/allanmathenge/mdx/master/images/**',
      }
    ]
  }
}
// when bringing in images from a remote source
module.exports = nextConfig
