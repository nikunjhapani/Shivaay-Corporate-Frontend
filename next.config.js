// next.config.js
module.exports = {
  images: {
    domains: ['localhost'], // 👈 allow local image URLs
  },
   webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000, // or 500
      aggregateTimeout: 300,
    };
    return config;
  },
};
