/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental : {
        serverActions: true
    },
    images: {
        domains: ['via.placeholder.com']
    }
}

module.exports = nextConfig