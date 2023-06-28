const express = require("express")

const router = express.Router()

const spellCtrl = require('../controllers/spells')

router.post("/spells", spellCtrl.createSpell)

module.exports = router