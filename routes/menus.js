const express = require('express')
const router = express.Router()
const menusController = require('../controllers/menus')

router.get('/', menusController.getDinner)
router.get('/dinner', menusController.getDinner)
router.get('/specials', menusController.getSpecials)
router.get('/dessert', menusController.getDesserts)
router.get('/wine', menusController.getWine)
router.get('/drinks', menusController.getDrinks)

module.exports = router