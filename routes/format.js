const express = require('express')
const router = express.Router()
const formatController = require('../controllers/format')

router.get('/specials', formatController.getSpecials)
router.post('/specials', formatController.postSpecials)
router.get('/dinner', formatController.getDinner)
router.post('/dinner', formatController.postDinner)
router.get('/dessert', formatController.getDessert)
router.post('/dessert', formatController.postDessert)
router.get('/dessertBack', formatController.getDessertBack)
router.post('/dessertBack', formatController.postDessertBack)
router.get('/wineList', formatController.getWineList)
router.post('/wineList', formatController.postWineList)

module.exports = router