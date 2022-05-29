const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//暂时关闭代码检测
  //反向代理
  devServer: {
    proxy: {
      // '/ajax': {//直接些后边的路径
      //   target: 'https://i.maoyan.com',
      //   changeOrigin: true,
      // },
      '/maoyan': {// /maoyan+后边的路径 target相同的只有一个
        target: 'https://i.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/maoyan': '',//把 /maoyan开头的替换成空
        }
      }
    }
  }
})
