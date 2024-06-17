const ShippingMethodController = require('../controllers/ShippingMethodController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)
// Get all shipping methods
router.get('/shippingMethod', ShippingMethodController.getAllShippingMethods);

// Get a single shipping method by ID
router.get('/shippingMethod/:id', ShippingMethodController.getShippingMethodById);

// Create a new shipping method
router.post('/shippingMethod/', ShippingMethodController.createShippingMethod);

// Update an existing shipping method by ID
router.put('/shippingMethod/:id', ShippingMethodController.updateShippingMethod);

// Delete a shipping method by ID
router.delete('/shippingMethod/:id', ShippingMethodController.deleteShippingMethod);


module.exports = router