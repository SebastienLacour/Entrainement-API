const express = require('express')

const router = express.Router()

const cookbookCtrl = require('../controllers/cookbooks')

router.post('/cookbooks', cookbookCtrl.createCookbook)
router.get('/cookbooks', cookbookCtrl.readCookbooks)
router.get('/cookbooks/:id', cookbookCtrl.readOneCookbook)
router.put('/cookbooks/:id', cookbookCtrl.updateOneCookbook)

module.exports = router