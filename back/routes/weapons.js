const express = require('express')

const router = express.Router()

const weaponCtrl = require("../controllers/weapons")

router.post('/weapons', weaponCtrl.createWeapons)
router.get('/weapons', weaponCtrl.readWeapons)

module.exports = router