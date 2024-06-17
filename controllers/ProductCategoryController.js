'use strict';

const { ProductCategory } = require('../models');

class ProductCategoryController {
  // Get all product categories
  static async getAllProductCategories(req, res) {
    try {
      const productCategories = await ProductCategory.findAll();
      res.status(200).json(productCategories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get a single product category by ID
  static async getProductCategoryById(req, res) {
    try {
      const productCategory = await ProductCategory.findByPk(req.params.id);
      if (productCategory) {
        res.status(200).json(productCategory);
      } else {
        res.status(404).json({ error: 'Product category not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Create a new product category
  static async createProductCategory(req, res) {
    try {
      const { store_id, product_category_name } = req.body;
      const productCategory = await ProductCategory.create({ store_id, product_category_name });
      res.status(201).json(productCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update an existing product category by ID
  static async updateProductCategory(req, res) {
    try {
      const { store_id, product_category_name } = req.body;
      const [updated] = await ProductCategory.update({ store_id, product_category_name }, {
        where: { product_category_id: req.params.id }
      });
      if (updated) {
        const updatedProductCategory = await ProductCategory.findByPk(req.params.id);
        res.status(200).json(updatedProductCategory);
      } else {
        res.status(404).json({ error: 'Product category not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete a product category by ID
  static async deleteProductCategory(req, res) {
    try {
      const deleted = await ProductCategory.destroy({
        where: { product_category_id: req.params.id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Product category not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProductCategoryController;
