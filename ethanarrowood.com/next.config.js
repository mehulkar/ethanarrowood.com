/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  eslint: {
    dirs: ["app"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/archived-site/index.html",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
