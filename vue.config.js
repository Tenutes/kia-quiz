const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: '/portfolio/kia/var3/',

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/sass/fonts.scss";
          @import "~@/assets/sass/_variables.scss";
          @import "~@/assets/sass/mixins.scss";
        `
      }
    }
  },

  chainWebpack: config => {
    config.module
          .rule('vue')
          .use('vue-loader')
          .tap(args => {
            args.compilerOptions.whitespace = 'preserve';
          });
  },

  outputDir: 'dist',

  pwa: {
    themeColor: '#bb162b',
    msTitleColor: null,
    name: 'KIA quiz',
    msTileColor: '#bb162b'
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'static' }
        ]
      })
    ],
  },
};
