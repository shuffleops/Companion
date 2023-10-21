/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['oaidalleapiprodscus.blob.core.windows.net'],

  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false
    };

    return config;
  },
}

module.exports = nextConfig
