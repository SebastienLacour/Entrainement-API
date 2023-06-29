const express = require("express")

const router = express.Router()

const spellCtrl = require('../controllers/spells')

router.post("/spells", spellCtrl.createSpell)
router.get("/spells", spellCtrl.readSpells)
router.get("/spells/:id", spellCtrl.readOneSpell)
router.put("/spells/:id", spellCtrl.UpdateOneSpell)

module.exports = router