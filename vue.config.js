module.exports = {
  publicPath: './',
  assetsDir: 'static',
  parallel: false,
  // lintOnSave: false, // 关闭语法检查

  // 第一种
  // devServer: {
  //   // proxy: 'http://ecuat.tk.cn' // 地址是访问的服务器地址
  // }
  // 第二种
  devServer: {
    // 发起ajax的地方端口号后面加上/api
    proxy: {
      '/api': {
        target: 'http://localhost:5000/api',
        pathRewrite: { '^/api': '' }, // 把自己定义的'/api'在代理服务器请求服务器时去掉
        ws: true, // 用于支持websocket
        changeDrigin: true // 用于控制请求头中的host值与请求的服务器中的一样(vue中默认true)
      },
      '/api2': {
        target: 'http://localhost:5001/api2',
        pathRewrite: { '^/api2': '' }, // 把自己定义的'/api'在代理服务器请求服务器时去掉
        ws: true, // 用于支持websocket
        changeDrigin: true // 用于控制请求头中的host值与请求的服务器中的一样(vue中默认true)
      }
    }
  }
}
