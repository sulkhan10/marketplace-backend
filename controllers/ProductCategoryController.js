'use strict';

const { ProductCategory } = require('../models');

class ProductCategoryController {
  // Get all product categories
  static async getAllProductCategories(req, res, next) {
    try {
      const productCategories = await ProductCategory.findAll();
      res.status(200).json(productCategories);
    } catch (error) {
      next(error);
    }
  }

  // Get a single product category by ID
  static async getProductCategoryById(req, res, next) {
    try {
      const productCategory = await ProductCategory.findByPk(req.params.id);
      if (productCategory) {
        res.status(200).json(productCategory);
      } else {
        res.status(404).json({ error: 'Product category not found' });
      }
    } catch (error) {
      next(error);
    }
  }

  // Get product categories by store ID
  static async getProductCategoriesByStoreId(req, res, next) {
    try {
      const { store_id } = req.params;
      const productCategories = await ProductCategory.findAll({
        where: { store_id }
      });
      if (productCategories.length > 0) {
        res.status(200).json(productCategories);
      } else {
        res.status(404).json({ error: 'No product categories found for this store' });
      }
    } catch (error) {
      next(error);
    }
  }

  // Create a new product category
  static async createProductCategory(req, res, next) {
    try {
      const { store_id, product_category_name } = req.body;
      const productCategory = await ProductCategory.create({ store_id, product_category_name });
      res.status(201).json(productCategory);
    } catch (error) {
      next(error);
    }
  }

  // Update an existing product category by ID
  static async updateProductCategory(req, res, next) {
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
      next(error);
    }
  }

  // Delete a product category by ID
  static async deleteProductCategory(req, res, next) {
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
      next(error);
    }
  }
}

module.exports = ProductCategoryController;
