/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "askproject.net",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
