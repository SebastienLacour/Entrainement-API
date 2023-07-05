const express = require('express')

const router = express.Router()

const damageCtrl = require('../controllers/damages')

router.post("/damages", damageCtrl.createDamage)
router.get("/damages", damageCtrl.readDamage)
router.get("/damages/:id", damageCtrl.readOneDamage)
router.put("/damages/:id", damageCtrl.updateOneDamage)

module.exports = router