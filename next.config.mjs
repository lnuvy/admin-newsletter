import envConfig from "./.envConfig.js"
const currentEnv = process.env.NEXT_PUBLIC_ENV
console.log("🚀 ~ currentEnv:", currentEnv)

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ...envConfig[currentEnv],
  },
}

export default nextConfig
