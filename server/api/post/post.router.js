const postRouter = require('express').Router()
const postController = require('./post.controller')
const upload = require('../../config/multer')

postRouter.post('/create', postController.createPost)
postRouter.post('/cdn', upload, postController.cdnHandler)
postRouter.get('/all', postController.getAll)

module.exports = postRouter