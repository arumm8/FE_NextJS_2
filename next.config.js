/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: `https://cdn.tailwindcss.com/<version>/tailwind.min.css`,
      },
    ],
  },
};


