const cms = require('../api/cms')
const dateFormat = require('dateformat')

const date = (string) => (
  dateFormat(new Date(string), 'd mmmm yyyy')
)

const middleware = async (req, res, next) => {
  const settings = await cms.getSettings()

  res.locals = {
    ...res.locals,
    cms: {
      settings,
    },
    format: {
      date,
    },
  }
  next()
}

module.exports = middleware
