const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.get('/login', authController.getLogin)
router.get('/newUser', authController.getNewUser)
router.get('/signup', authController.getSignup)
router.get('/users', authController.getUsers)

module.exports = router