const OrderController = require('../controllers/OrderController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)

router.get('/orders', OrderController.getAllOrders);
router.get('/orders/:id', OrderController.getOrderById);
router.post('/orders', OrderController.createOrder);
router.put('/orders/:id', OrderController.updateOrder);
router.delete('/orders/:id', OrderController.deleteOrder);


module.exports = router