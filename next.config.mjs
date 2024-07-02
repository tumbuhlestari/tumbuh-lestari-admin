/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'u9xbqbnjhyy3hhkb.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
