/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.API_URL
      },
    // swcMinify: true,
    // experimental: {
    //   appDir: true,
    // },

    // webpack: (config, { dev, isServer }) => {
    //     if (!dev && !isServer) {
    //       Object.assign(config.resolve.alias, {
    //         "react/jsx-runtime.js": "preact/compat/jsx-runtime",
    //         react: "preact/compat",
    //         "react-dom/test-utils": "preact/test-utils",
    //         "react-dom": "preact/compat",
    //       });
    //     }
    //     return config;
    //   },
};

export default nextConfig;
