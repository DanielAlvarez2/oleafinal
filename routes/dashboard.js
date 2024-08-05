const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboard')
const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')
const {ensureAuth} = require('../middleware/auth')

router.get('/', dashboardController.getIndex)
router.get('/users', dashboardController.getUsers)
router.get('/updateMenus', dashboardController.getUpdateMenus)

module.exports = router