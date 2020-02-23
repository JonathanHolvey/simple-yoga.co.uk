const express = require('express')
const home = require('./controllers/home')
const blog = require('./controllers/blog')
const mailer = require('./controllers/mailer')
const page = require('./controllers/page')

const router = express.Router()
router.get('/', home)
router.get('/:slug', page)
router.post('/mailer', mailer)

router.get('/posts', blog.posts)
router.get('/post/:slug', blog.post)

module.exports = router
