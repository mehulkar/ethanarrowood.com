/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
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
