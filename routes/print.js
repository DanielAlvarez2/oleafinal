const express = require('express')
const router = express.Router()
const printController = require('../controllers/print')

router.get('/specials', printController.getSpecials)

module.exports = router