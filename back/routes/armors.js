const express = require("express")

const router = express.Router()

const armorCtrl = require('../controllers/armors')

router.post("/armors", armorCtrl.createArmor)
router.get("/armors", armorCtrl.readArmor)
router.get("/armors/:id", armorCtrl.readOneArmor)
router.put("/armors/:id", armorCtrl.updateOneArmor)

module.exports = router