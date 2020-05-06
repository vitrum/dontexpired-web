const BASE_URL = process.env.NODE_ENV === 'production' ? '/dontexpired-web/' : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'docs',
}