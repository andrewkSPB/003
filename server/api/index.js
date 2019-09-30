const restRouter = require('express').Router()
const userRouter = require('./user/user.router')
const postRouter = require('./post/post.router')


restRouter.use('/user', userRouter)
restRouter.use('/post', postRouter)


module.exports = restRouter