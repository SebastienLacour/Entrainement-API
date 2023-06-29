const express = require('express')

const router = express.Router()

const objectCtrl = require('../controllers/object')

router.post('/cookbooks', objectCtrl.createObject)
router.get('/cookbooks', objectCtrl.readObjects)
router.get('/cookbooks/:id', objectCtrl.readOneObject)
router.put('/cookbooks/:id', objectCtrl.updateOneObject)

module.exports = router