const express = require('express')

const router = express.Router()

const productCtrl = require('../controllers/products')

router.post("/products", productCtrl.createProduct)
router.get("/products", productCtrl.readProducts)
router.get("/products/:id", productCtrl.readOneProduct)
router.put("/products/:id", productCtrl.updateOneProduct)

module.exports = router