const ProductCategoryController = require('../controllers/ProductCategoryController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)

router.get('/productCategory/', ProductCategoryController.getAllProductCategories);
router.get('/productCategory/:id', ProductCategoryController.getProductCategoryById);
router.get('/productCategories/store/:store_id', ProductCategoryController.getProductCategoriesByStoreId);
router.post('/productCategory/', ProductCategoryController.createProductCategory);
router.put('/productCategory/:id', ProductCategoryController.updateProductCategory);
router.delete('/productCategory/:id', ProductCategoryController.deleteProductCategory);

module.exports = router