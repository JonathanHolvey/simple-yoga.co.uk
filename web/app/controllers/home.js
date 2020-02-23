const cms = require('../api/cms')

const controller = async (req, res) => {
  const page = await cms.getPage('home')

  res.render('home', {
    type: 'homepage',
    page,
 })
}

module.exports = controller
