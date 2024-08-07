const express = require('express')
const router = express.Router()
const formatController = require('../controllers/format')

router.get('/specials', formatController.getSpecials)
router.post('/specials', formatController.postSpecials)
router.get('/dinner', formatController.getDinner)
router.post('/dinner', formatController.postDinner)

module.exports = router