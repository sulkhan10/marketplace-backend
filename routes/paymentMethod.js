const PaymentMethodController = require('../controllers/PaymentMethodController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)
router.get('/paymentMethod', PaymentMethodController.getAllPaymentMethods);
router.get('/paymentMethod/:id', PaymentMethodController.getPaymentMethodById);
router.post('/paymentMethod', PaymentMethodController.createPaymentMethod);
router.put('/paymentMethod/:id', PaymentMethodController.updatePaymentMethod);
router.delete('/paymentMethod/:id', PaymentMethodController.deletePaymentMethod);



module.exports = router