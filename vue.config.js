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
  }
}
