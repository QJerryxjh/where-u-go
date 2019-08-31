const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  outputDir: 'note',
  productionSourceMap: true,
  devServer: {
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@src', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@pages', resolve('src/pages'))
      .set('@utils', resolve('src/utils'))
      .set('@store', resolve('src/store'))
      .set('@router', resolve('src/router'))
  }
}
