const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // transpileDependencies: [/zzp-ui/],
  productionSourceMap: false,
  // publicPath: process.env.NODE_ENV !== 'development' ? './' : '/',
  // outputDir: 'dist',
  // devServer: {
  //   host: '0.0.0.0',
  //   port: '8080',
  //   disableHostCheck: true // 解决127.0.0.1指向其他域名时出现"Invalid Host header"问题
  // },
  chainWebpack: config => {
    config.resolve.alias.set('@pages', resolve('src/pages'))
    // eg: 更改编译忽略某些svg文件的加载
    // config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin('html').tap(args => {
      args[0].title = '前后端分离'
      return args
    })
  },
  // configureWebpack: config => {
  //   config.module.rules.push({
  //     test: /.md$/,
  //     use: [{
  //       loader: 'text-loader'
  //     }]
  //   })
  // },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // before key is 'data', now change to 'prependData'  so this assumes you have a file named `src/variables.scss`
        prependData: '@import "@/assets/stylesheets/_variables.scss";'
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            // rootValue: 37.5, // 效果图375
            rootValue: (input) => {
              // eslint-disable-next-line no-useless-escape
              if (/@media\sonly\sscreen\sand\s\(min\-width:\s1024px\)/i.test(input && input.css)) {
                return 144
              }
              return 37.5
            },
            propList: ['*'], // 属性的选择器，*表示通用
            selectorBlackList: ['.px-'] //   忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
            // exclude: /node_modules/i
          })
        ],
        /* You can extend webpack config here */
        extend (config, ctx) {}
      }
    }
  }
}
