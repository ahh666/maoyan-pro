const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: './',
  devServer: {
    proxy: { // 设置代理
      '/ajax': {
        target: 'http://m.maoyan.com', // 请求的目标服务器接口
        changeOrigin: true, 
        pathRewrite: { 
          '^/ajax': '/ajax' 
        }
      }
    }
  },
  chainWebpack: config => {
    if (!isProd) {
      config
        .plugin('html-link')
        .use(require('html-webpack-link-plugin'), [{
          js: ['https://cdn.bootcss.com/eruda/1.5.4/eruda.min.js'],
          before: true,
        }])
        .end()
    }
  }
}
