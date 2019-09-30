const userController = require('./user.controller')
const router = require('express').Router()

router.post('/create', userController.createUser)
router.post('/login', userController.loginUser)



module.exports = router