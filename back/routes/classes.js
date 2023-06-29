const express = require('express')

const router = express.Router()

const classCtrl = require('../controllers/classes')

router.post('/classes', classCtrl.createClass)
router.get('/classes', classCtrl.readClasses)
router.get('/classes/:id', classCtrl.readOneClass)
router.put('/classes/:id', classCtrl.updateOneClass)

module.exports = router