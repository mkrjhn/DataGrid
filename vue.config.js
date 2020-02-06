const nodeExternals = require('webpack-node-externals');

module.exports = {
  lintOnSave: true,
  productionSourceMap: false,

  chainWebpack: (config) => {
    config.externals(nodeExternals());
  }
};
