const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const authentication = require('../middlewares/authentication');

router.use(authentication);

// Get all products for a specific store
router.get('/stores/:store_id/products', ProductController.getAllProducts);

// Get a single product by ID for a specific store
router.get('/stores/:store_id/products/:id', ProductController.getProductById);

// Create a new product for a specific store
router.post('/stores/:store_id/products', ProductController.createProduct);

// Update an existing product by ID for a specific store
router.put('/stores/:store_id/products/:id', ProductController.updateProduct);

// Delete a product by ID for a specific store
router.delete('/stores/:store_id/products/:id', ProductController.deleteProduct);

module.exports = router;
