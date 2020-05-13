let config = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime'
  ]
}
if (process.env.VUE_APP_BUILD_PLATFORM === 'VUE') {
  config = {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ]
  }
}
module.exports = config
