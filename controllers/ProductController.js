'use strict';

const { Product } = require('../models');

class ProductController {
  // Get all products
  static async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get a single product by ID
  static async getProductById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Create a new product
  static async createProduct(req, res) {
    try {
      const {
        store_id,
        product_name,
        description,
        weight,
        length,
        width,
        height,
        price,
        stock_quantity,
        product_category_id
      } = req.body;
      const product = await Product.create({
        store_id,
        product_name,
        description,
        weight,
        length,
        width,
        height,
        price,
        stock_quantity,
        product_category_id
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update an existing product by ID
  static async updateProduct(req, res) {
    try {
      const {
        store_id,
        product_name,
        description,
        weight,
        length,
        width,
        height,
        price,
        stock_quantity,
        product_category_id
      } = req.body;
      const [updated] = await Product.update(
        {
          store_id,
          product_name,
          description,
          weight,
          length,
          width,
          height,
          price,
          stock_quantity,
          product_category_id
        },
        {
          where: { product_id: req.params.id }
        }
      );
      if (updated) {
        const updatedProduct = await Product.findByPk(req.params.id);
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete a product by ID
  static async deleteProduct(req, res) {
    try {
      const deleted = await Product.destroy({
        where: { product_id: req.params.id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProductController;
