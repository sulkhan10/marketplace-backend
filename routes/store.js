const StoreController = require('../controllers/StoreController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)

router.get('/store', StoreController.allStore)

module.exports = router