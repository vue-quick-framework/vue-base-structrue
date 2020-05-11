import Compressor from 'compressorjs'

export default function (file, config) {
  return new Promise((resolve) => {
    config = Object.assign({ quality: 0.8 }, config)
    // eslint-disable-next-line no-new
    new Compressor(file, {
      ...config,
      success (result) {
        resolve(result)
      },
      error () {
        resolve(file)
      }
    })
  })
}

// usage
// let compressedFile = await compressImage(file)
