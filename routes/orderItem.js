const OrderItemController = require('../controllers/OrderItemController');
const authentication = require('../middlewares/authentication');

const router = require('express').Router();

router.use(authentication);

// Get all order items
router.get('/orderItems', OrderItemController.getAllOrderItems);

// Get a single order item by ID
router.get('/orderItems/:id', OrderItemController.getOrderItemById);

// Create a new order item
router.post('/orderItems', OrderItemController.createOrderItem);

// Update an existing order item by ID
router.put('/orderItems/:id', OrderItemController.updateOrderItem);

// Delete an order item by ID
router.delete('/orderItems/:id', OrderItemController.deleteOrderItem);

module.exports = router;
