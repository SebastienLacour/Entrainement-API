const express = require("express")

const router = express.Router()

const talismanCtrl = require('../controllers/talisman')

router.post("/talismans", talismanCtrl.createTalisman)
router.get("/talismans", talismanCtrl.readTalisman)
router.get("/talismans/:id", talismanCtrl.readOneTalisman)
router.put("/talismans/:id", talismanCtrl.updateOneTalisman)

module.exports = router