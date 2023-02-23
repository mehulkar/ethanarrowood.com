/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/archived-site/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
