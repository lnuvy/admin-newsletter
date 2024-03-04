import envConfig from "./.envConfig.js"
const currentEnv = process.env.NEXT_PUBLIC_ENV
console.log("🚀 ~ currentEnv:", currentEnv)

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ...envConfig[currentEnv],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async rewrites() {
    // proxy
    return [
      {
        source: "/api/:path*",
        destination: `http://127.0.0.1:3000/:path*`, //컨플루언스의 API주소
      },
    ]
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://127.0.0.1:3000/:path*",
  //     },
  //   ]
  // },
}

export default nextConfig
