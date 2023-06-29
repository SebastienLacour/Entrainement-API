const express = require('express')

const router = express.Router()

const objectCtrl = require('../controllers/object')

router.post('/objects', objectCtrl.createObject)
router.get('/objects', objectCtrl.readObjects)
router.get('/objects/:id', objectCtrl.readOneObject)
router.put('/objects/:id', objectCtrl.updateOneObject)

module.exports = router