const OrderController = require('../controllers/OrderController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)

router.get('/orders', OrderController.getAllOrders);
router.get('/orders/:id', OrderController.getOrderById);
router.post('/orders', OrderController.createOrder);
router.put('/orders/:id', OrderController.updateOrder);
router.delete('/orders/:id', OrderController.deleteOrder);
router.get('/orders/store/:store_id', OrderController.getOrdersByStoreId);
router.get('/orders/user/:user_id', OrderController.getOrdersByUserId);
router.post("/orders/:id/payment", OrderController.goToPayment); // New route for goToPayment



module.exports = router