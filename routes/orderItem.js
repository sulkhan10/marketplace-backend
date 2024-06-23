const express = require('express');
const OrderItemController = require('../controllers/OrderItemController');
const router = express.Router();

router.get('/orderItems', OrderItemController.getAllOrderItems);
router.get('/orderItems/:id', OrderItemController.getOrderItemById);
router.get('/orderItems/order/:order_id', OrderItemController.getOrderItemsByOrderId);
router.get('/orderItems/product/:product_id', OrderItemController.getOrderItemsByProductId);
router.post('/orderItems', OrderItemController.createOrderItem);
router.put('/orderItems/:id', OrderItemController.updateOrderItem);
router.delete('/orderItems/:id', OrderItemController.deleteOrderItem);

module.exports = router;
