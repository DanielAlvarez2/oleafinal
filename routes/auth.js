const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/newUser', authController.getNewUser)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/users', authController.getUsers)
router.get('/dashboard', authController.getDashboard)

module.exports = router