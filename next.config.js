/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "bit.ly",
      "upload.wikimedia.org",
      "dmgupcwbwy0wl.cloudfront.net",
      "cdn1.goibibo.com",
      "www.gujarattourism.com",
    ],
  },
};

module.exports = nextConfig;
