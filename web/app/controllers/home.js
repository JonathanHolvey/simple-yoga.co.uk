const cms = require('../api/cms')

const controller = async (req, res) => {
  const [page, settings] = await Promise.all([
    cms.getPage('home'),
    cms.getSettings(),
  ])

  console.log(page)
  res.render('home', {
    type: 'homepage',
    menus: settings.navigation,
    page,
 })
}

module.exports = controller
