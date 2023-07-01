const express = require("express")

const router = express.Router()

const statCtrl = require('../controllers/stats')

router.post("/stats", statCtrl.createStat)
router.get("/stats", statCtrl.readStat)
router.get("/stats/:id", statCtrl.readOneStat)
router.put("/stats/:id", statCtrl.updateOneStat)

module.exports = router