const express = require('express')

const router = express.Router()

const weaponCtrl = require("../controllers/weapons")

router.post('/weapons', weaponCtrl.createWeapons)

module.exports = router