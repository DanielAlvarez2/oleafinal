const express = require('express')
const router = express.Router()
const formatController = require('../controllers/format')

router.get('/specials', formatController.getSpecials)

module.exports = router