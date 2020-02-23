const cms = require('../api/cms')

const middleware = async (req, res, next) => {
  const settings = await cms.getSettings()

  res.locals.cms = {
    settings,
  }
  next()
}

module.exports = middleware
