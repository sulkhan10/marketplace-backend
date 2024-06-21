const ReceiptDiscountController = require('../controllers/ReceiptDiscountController');
const authentication = require('../middlewares/authentication');

const router = require('express').Router();

router.use(authentication);
router.post('/receiptDiscount', ReceiptDiscountController.createReceiptDiscount);
router.put('/receiptDiscount/:id', ReceiptDiscountController.updateReceiptDiscount);
router.delete('/receiptDiscount/:id', ReceiptDiscountController.deleteReceiptDiscount);
router.get('/receiptDiscount/:id', ReceiptDiscountController.getReceiptDiscountById);
router.get('/receiptDiscount', ReceiptDiscountController.getAllReceiptDiscounts);
router.get('/receiptDiscounts/store/:storeId', ReceiptDiscountController.getReceiptDiscountsByStoreId);

module.exports = router;
