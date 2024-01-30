/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: '_static',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
