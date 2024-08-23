const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')
const authController = require('../controllers/auth')
const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')
const {ensureAuth, ensureGuest} = require('../middleware/auth')


router.get('/', mainController.getIndex)
router.get('/index2', mainController.getIndex2)
router.get('/info', mainController.getInfo)
router.get('/freeParking', mainController.getFreeParking)
router.get('/chefBio', mainController.getChefBio)
router.get('/privateParties', mainController.getPrivateParties)
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