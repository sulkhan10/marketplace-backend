const ProductController = require('../controllers/ProductController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)

// Get all products
router.get('/product', ProductController.getAllProducts);

// Get a single product by ID
router.get('/product/:id', ProductController.getProductById);

// Create a new product
router.post('/product/', ProductController.createProduct);

// Update an existing product by ID
router.put('/product/:id', ProductController.updateProduct);

// Delete a product by ID
router.delete('/product/:id', ProductController.deleteProduct);

module.exports = router