const {
  merge
} = require('webpack-merge');

const baseDevConfig = require('@edx/frontend-build/config/webpack.dev.config.js');

module.exports = merge(baseDevConfig, {
  // This configuration needs to be defined here, because for some reason CLI
  // arguments seem to be ignored when the --config=... option is used in
  // Webpack 5.50.0.
  devServer: {
    allowedHosts: 'all',
    client: {
      progress: true,
    },
  },
})
