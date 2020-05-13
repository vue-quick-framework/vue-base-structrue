require('@babel/register')({
  // This will override `node_modules` ignoring - you can alternatively pass
  // an array of strings to be explicitly matched or a regex / glob
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime'
  ],
  // This will override `node_modules` ignoring - you can alternatively pass
  // an array of strings to be explicitly matched or a regex / glob
  ignore: [],
  only: [/node_modules/],
  // extensions: ['.es6', '.es', '.jsx', '.js', '.mjs'],
  extensions: ['.js']
})

require('./build/build.js')
