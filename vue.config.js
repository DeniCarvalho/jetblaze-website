var webpack = require('webpack')
module.exports = {
  chainWebpack: config => config.resolve.symlinks(false),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  devServer: {
    disableHostCheck: true,
  },

  transpileDependencies: ['vuetify'],
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.ProvidePlugin({
          $: 'jquery',
          jquery: 'jquery',
          'window.jQuery': 'jquery',
          jQuery: 'jquery',
      }),
  ],
  },
  pluginOptions: {
    i18n: {
      locale: 'pt-BR',
      fallbackLocale: 'pt-BR',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  pwa: {
    themeColor: '#014171',
    msTileColor: '#014171',
    // configure the manifest options
    manifestOptions: {
      display: 'standalone',
      background_color: '#014171',
      orientation: 'portrait',
    },
  },
}
