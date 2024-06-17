const UserController = require('../controllers')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()
const bankAccount = require('../routes/bankAccount')
const store = require('../routes/store')
const productCategory = require('../routes/productCategory')
const order = require('../routes/order')
const paymentMethod = require('../routes/paymentMethod')
const shippingMethod = require('../routes/shippingMethod')
const product = require('../routes/product')
const receiptDiscount = require('../routes/receiptDiscount')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
// router.use(authentication)
router.use(bankAccount)
router.use(store)
router.use(order)
router.use(paymentMethod)
router.use(product)
router.use(shippingMethod)
router.use(receiptDiscount)
router.use(productCategory)

module.exports = router