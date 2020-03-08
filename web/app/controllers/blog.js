const cms = require('../api/cms')
const dateFormat = require('dateformat')

const post = async (req, res, next) => {
  const post = await cms.getPost(req.params.slug)
  if (!post) {
    next()
    return
  }

  res.render('post', {
    type: 'post',
    post,
  })
}

const posts = async (req, res) => {
  const posts = await cms.getPosts()
  res.render('posts', {
    type: 'posts',
    posts,
  })
}

module.exports = {
  post,
  posts,
}
