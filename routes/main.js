console.log('routes/main.js')
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)
router.get('/info', homeController.getInfo)


module.exports = router