const mockConfig = {
  enable: true
}
module.exports = function (app) {
  if (!mockConfig.enable) {
    return
  }
  app.get('/api/index', (req, res) => {
    res.json(require('./data/index'))
  })
}
