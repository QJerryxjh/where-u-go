module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  outputDir: 'note',
  productionSourceMap: true,
  devServer: {
    open: true
  }
}
