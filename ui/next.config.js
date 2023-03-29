/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    PORT: process.env.PORT,
    AUTOMATIC_LOGOUT_TIMEOUT: process.env.AUTOMATIC_LOGOUT_TIMEOUT,
    CRYPTO_KEY: process.env.CRYPTO_KEY
  }
}

module.exports = nextConfig
