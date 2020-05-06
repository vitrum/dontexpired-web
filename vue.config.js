const BASE_URL = process.env.NODE_ENV === 'production' ? '/dontexpired-web/' : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'docs',
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '别过期了！'
    }
  }
}