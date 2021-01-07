const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    configure: (/** @type {import('webpack').Configuration} webpackConfig */ config) => {
      return config;
    }
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
