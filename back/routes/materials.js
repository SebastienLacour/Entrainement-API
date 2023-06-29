const express = require('express')

const router = express.Router()

const materialCtrl = require('../controllers/material')

router.post('/materials', materialCtrl.createMaterial)
router.get('/materials', materialCtrl.readMaterial)
router.get('/materials/:id', materialCtrl.readOneMaterial)
router.put('/materials/:id', materialCtrl.updateOneMaterial)

module.exports = router