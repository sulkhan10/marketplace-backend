const ReceiptDiscountController = require('../controllers/ReceiptDiscountController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)

router.get('/receiptDiscounts', ReceiptDiscountController.getAllReceiptDiscounts);
router.get('/receiptDiscounts/:id', ReceiptDiscountController.getReceiptDiscountById);
router.post('/receiptDiscounts', ReceiptDiscountController.createReceiptDiscount);
router.put('/receiptDiscounts/:id', ReceiptDiscountController.updateReceiptDiscount);
router.delete('/receiptDiscounts/:id', ReceiptDiscountController.deleteReceiptDiscount);

module.exports = router