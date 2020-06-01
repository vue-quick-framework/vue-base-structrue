const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
const merge = require("lodash.merge")
const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const target = TARGET_NODE ? 'server' : 'client'

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

console.log(`\n --- target:${target} ---\n`)

module.exports = {
  // transpileDependencies: [/zzp-ui/],
  productionSourceMap: false,

  // publicPath: process.env.NODE_ENV !== 'development' ? './' : '/',
  // outputDir: 'dist',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: '8080',
    disableHostCheck: true, // 解决127.0.0.1指向其他域名时出现"Invalid Host header"问题
    proxy: {
      '/api': {
        target: '<url>',
        changOrigin: true // 配置跨域
        // ws: true, // 配置ws跨域
        // secure: false, // https协议才设置
      }
    },
    before: app => {
      require('./mock')(app)
    }
  },

  // 自定义入口和模板
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html'
  //   }
  // },
  chainWebpack: config => {
    config.resolve.alias.set('@pages', resolve('src/pages'))
    // eg: 更改编译忽略某些svg文件的加载
    config.module.rule('svg').exclude.add(resolve('src/components/shared/SvgIcon')).end()
    config.module.rule('icons').test(/\.svg$/).include.add(resolve('src/components/shared/SvgIcon')).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({ symbolId: 'icon-[name]' }).end()
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin('html').tap(args => {
      args[0].title = '前后端分离'
      return args
    })
    // ssr
    config.module.rule('vue').use('vue-loader').tap(options => {
      merge(options, {
        optimizeSSR: false
      })
    })
  },
  configureWebpack: () => ({
    // 将 entry 指向应用程序的 server / client 文件
    entry: `./src/entry-${target}.js`,
    // 对 bundle renderer 提供 source map 支持
    devtool: 'source-map',
    target: TARGET_NODE ? 'node' : 'web',
    node: TARGET_NODE ? undefined : false,
    output: {
      libraryTarget: TARGET_NODE ? 'commonjs2' : undefined
    },
    // https://webpack.js.org/configuration/externals/#function
    // https://github.com/liady/webpack-node-externals
    // 外置化应用程序依赖模块。可以使服务器构建速度更快，
    // 并生成较小的 bundle 文件。
    externals: TARGET_NODE
      ? nodeExternals({
        // 不要外置化 webpack 需要处理的依赖模块。
        // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
        // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
        whitelist: [/\.css$/]
      })
      : undefined,
    optimization: {
      splitChunks: TARGET_NODE ? false : undefined
    },
    plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
  }),
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
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
