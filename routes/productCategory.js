const ProductCategoryController = require('../controllers/ProductCategoryController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)

// Get all product categories
router.get('/productCategory', ProductCategoryController.getAllProductCategories);

// Get a single product category by ID
router.get('/productCategory/:id', ProductCategoryController.getProductCategoryById);

// Create a new product category
router.post('/productCategory/', ProductCategoryController.createProductCategory);

// Update an existing product category by ID
router.put('/productCategory/:id', ProductCategoryController.updateProductCategory);

// Delete a product category by ID
router.delete('/productCategory/:id', ProductCategoryController.deleteProductCategory);

module.exports = router