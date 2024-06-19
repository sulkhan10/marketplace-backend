const ProductDiscountController = require('../controllers/ProductDiscountController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)

router.get('/receiptDiscounts', ProductDiscountController.getAllProductDiscounts);
router.get('/receiptDiscounts/:id', ProductDiscountController.getProductDiscountById);
router.post('/receiptDiscounts', ProductDiscountController.createProductDiscount);
router.put('/receiptDiscounts/:id', ProductDiscountController.updateProductDiscount);
router.delete('/receiptDiscounts/:id', ProductDiscountController.deleteProductDiscount);

module.exports = router