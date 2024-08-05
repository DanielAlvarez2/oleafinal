const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')
const authController = require('../controllers/auth')
const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')
const {ensureAuth, ensureGuest} = require('../middleware/auth')


router.get('/', mainController.getIndex)
router.get('/info', mainController.getInfo)
router.get('/free-parking', mainController.getFreeParking)
router.get('/chef-bio', mainController.getChefBio)
router.get('/private-parties', mainController.getPrivateParties)
router.get('/press', mainController.getPress)
router.get('/giftcards', mainController.getGiftcards)
router.get('/newsletter', mainController.getNewsletter)
router.get('/dinner', mainController.getDinner)
router.get('/specials', mainController.getSpecials)
router.get('/dessert', mainController.getDessert)
router.get('/login', authController.getLogin)
router.get('/signup', authController.getSignup)

router.get('/')

module.exports = router