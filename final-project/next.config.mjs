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
                pathname: '/allanmathenge/mdx/master/images/**'
            }
        ]
    } // used when bringing images from a remote source
};

export default nextConfig;