'use strict';

const { Product,ProductDiscount,ProductCategory } = require('../models');

class ProductController {
  // Get all products for a specific store
  static async getAllProducts(req, res) {
    try {
      const { store_id } = req.params;
      const products = await Product.findAll({ where: { store_id },include: [
          { model: ProductCategory, as: "productCategory" },
          {
            model: ProductDiscount,
            as: "productDiscount",
          },
        ], });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get a single product by ID for a specific store
  static async getProductById(req, res) {
    try {
      const { store_id, id } = req.params;
      const product = await Product.findOne({ where: { store_id, product_id: id } ,
        include: [
          { model: ProductCategory, as: "productCategory" },
          {
            model: ProductDiscount,
            as: "productDiscount",
          },
        ],
      });
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Create a new product for a specific store
  static async createProduct(req, res) {
    try {
      const { store_id } = req.params;
      const {
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

  // Update an existing product by ID for a specific store
  static async updateProduct(req, res) {
    try {
      const { store_id, id } = req.params;
      const {
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
          where: { store_id, product_id: id }
        }
      );
      if (updated) {
        const updatedProduct = await Product.findOne({ where: { store_id, product_id: id } });
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete a product by ID for a specific store
  static async deleteProduct(req, res) {
    try {
      const { store_id, id } = req.params;
      const deleted = await Product.destroy({
        where: { store_id, product_id: id }
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
