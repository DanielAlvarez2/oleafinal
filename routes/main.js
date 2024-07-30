const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.getIndex)
router.get('/info', mainController.getInfo)
router.get('/free-parking', mainController.getFreeParking)
router.get('/chef-bio', mainController.getChefBio)
router.get('/private-parties', mainController.getPrivateParties)
router.get('/press', mainController.getPress)
router.get('/giftcards', mainController.getGiftcards)
router.get('/newsletter', mainController.getNewsletter)
router.get('/dinner', mainController.getDinner)

module.exports = router