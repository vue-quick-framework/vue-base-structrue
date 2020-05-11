module.exports = {
  productionSourceMap: false,
  // transpileDependencies: [/zzp-ui/],
  chainWebpack: config => {
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin('html').tap(args => {
      args[0].title = '前后端分离'
      return args
    })
  }
}
