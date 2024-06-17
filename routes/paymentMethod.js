const PaymentMethodController = require('../controllers/PaymentMethodController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)
// Get all payment methods
router.get('/paymentMethod', PaymentMethodController.getAllPaymentMethods);

// Get a single payment method by ID
router.get('/paymentMethod/:id', PaymentMethodController.getPaymentMethodById);

// Create a new payment method
router.post('/paymentMethod/', PaymentMethodController.createPaymentMethod);

// Update an existing payment method by ID
router.put('/paymentMethod/:id', PaymentMethodController.updatePaymentMethod);

// Delete a payment method by ID
router.delete('/paymentMethod/:id', PaymentMethodController.deletePaymentMethod);


module.exports = router