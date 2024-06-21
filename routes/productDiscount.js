const express = require('express');
const ProductDiscountController = require('../controllers/ProductDiscountController');
const authentication = require('../middlewares/authentication');

const router = express.Router();

router.use(authentication);

router.get('/productDiscount', ProductDiscountController.getAllProductDiscounts);
router.get('/productDiscount/:id', ProductDiscountController.getProductDiscountById);
router.get('/productDiscounts/store/:storeId', ProductDiscountController.getProductDiscountsByStoreId);
router.post('/productDiscount', ProductDiscountController.createProductDiscount);
router.put('/productDiscount/:id', ProductDiscountController.updateProductDiscount);
router.delete('/productDiscount/:id', ProductDiscountController.deleteProductDiscount);

module.exports = router;
