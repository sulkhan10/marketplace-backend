const UserController = require('../controllers')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()
const bankAccount = require('../routes/bankAccount')
const store = require('../routes/store')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
// router.use(authentication)
router.use(bankAccount)
router.use(store)

module.exports = router