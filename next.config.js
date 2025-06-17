// next.config.js
module.exports = {
  images: {
    domains: ["localhost", "api.shivaayjewels.com"],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};
