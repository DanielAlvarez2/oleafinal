const express = require('express')
const router = express.Router()
const printController = require('../controllers/print')

router.get('/specials', printController.getSpecials)
router.get('/dinner', printController.getDinner)
router.get('/dessert', printController.getDessert)
router.get('/dessertBack', printController.getDessertBack)

module.exports = router