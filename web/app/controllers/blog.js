const cms = require('../api/cms')

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
    type: 'post-list',
    posts,
  })
}

module.exports = {
  post,
  posts,
}
