const cms = require('../api/cms')

const controller = async (req, res, next) => {
  const page = await cms.getPage(req.params.slug)
  if (!page) {
    next()
    return
  }

  res.render('page', {
    type: `page ${page.slug}`,
    page,
  })
}

module.exports = controller
