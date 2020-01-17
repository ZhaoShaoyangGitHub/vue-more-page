const pages = require('./src/config/pages.config.ts')

module.exports = {
  pages: pages,
  configureWebpack: (config) => {
    //  生产环境下去掉console.log 
    if (process.env.NODE_ENV === 'production') {
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  chainWebpack: config => {
    // 修复热更新
    config.resolve.symlinks(true);
  },
  assetsDir: 'static',
  devServer: {
    open: 'Google Chrome',
    port: 6060,
    index: 'index.html'
  }
}