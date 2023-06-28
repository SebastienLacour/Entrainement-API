const express = require('express')

const router = express.Router()

const weaponCtrl = require("../controllers/weapons")

router.post('/weapons', weaponCtrl.createWeapons)
router.get('/weapons', weaponCtrl.readWeapons)
router.get('/weapons/:id', weaponCtrl.readOneWeapon)
router.put('/weapons/:id', weaponCtrl.updateOneWeapon)
router.delete('/weapons/:id', weaponCtrl.deleteOneWeapon)

module.exports = router