/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.carekwik.com',
          },
        ],
        destination: 'https://carekwik.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
