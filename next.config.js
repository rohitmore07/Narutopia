/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'daisyui.com',
      'cdn.myanimelist.net',
      'static.wikia.nocookie.net'
    ],
    unoptimized: true
  },
}

module.exports = nextConfig