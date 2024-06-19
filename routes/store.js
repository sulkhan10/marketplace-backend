const express = require("express");
const StoreController = require("../controllers/StoreController");
const authentication = require("../middlewares/authentication");
const router = express.Router();

router.use(authentication);

// Get all stores
router.get("/stores", StoreController.getAllStores);

// Get a single store by ID
router.get("/stores/:id", StoreController.getStoreById);

// Create a new store
router.post("/stores", StoreController.createStore);

// Update an existing store by ID
router.put("/stores/:id", StoreController.updateStore);

// Delete a store by ID
router.delete("/stores/:id", StoreController.deleteStore);

module.exports = router;
