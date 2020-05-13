// console.log(1)
// async function f () {
//   return 2
// }
//
// (async () => {
//   console.log(await f())
// })()

// require('@babel/polyfill')
const util = require('util')
require('util.promisify').shim()
const TextEncodingPolyfill = require('text-encoder')
Object.defineProperty(util, 'TextEncoder', {
  configurable: true,
  enumerable: true,
  value: TextEncodingPolyfill.TextEncoder,
  writable: true
})
// Object.defineProperty(util, 'TextDecoder', {
//   configurable: true,
//   enumerable: true,
//   value: TextEncodingPolyfill.TextDecoder,
//   writable: true
// })
console.log(3)
const { error } = require('@vue/cli-shared-utils')
// const requiredVersion = require('../package.json').engines.node
//
// if (!semver.satisfies(process.version, requiredVersion)) {
//   error(
//     `You are using Node ${process.version}, but vue-cli-service ` +
//     `requires Node ${requiredVersion}.\nPlease upgrade your Node version.`
//   )
//   process.exit(1)
// }

const Service = require('@vue/cli-service/lib/Service')
const service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd())

const rawArgv = process.argv.slice(2)
const args = require('minimist')(rawArgv, {
  boolean: [
    // build
    'modern',
    'report',
    'report-json',
    'inline-vue',
    'watch',
    // serve
    'open',
    'copy',
    'https',
    // inspect
    'verbose'
  ]
})
const command = 'build'

service.run(command, args, rawArgv).catch(err => {
  error(err)
  process.exit(1)
})
