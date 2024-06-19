'use strict';

const { ProductDiscount } = require('../models');

module.exports = {
  async getAllProductDiscounts(req, res) {
    try {
      const productDiscounts = await ProductDiscount.findAll();
      res.status(200).json(productDiscounts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getProductDiscountById(req, res) {
    try {
      const productDiscount = await ProductDiscount.findByPk(req.params.id);
      if (productDiscount) {
        res.status(200).json(productDiscount);
      } else {
        res.status(404).json({ error: 'Product discount not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createProductDiscount(req, res) {
    try {
      const { store_id, discount_rate, quota, start_date, end_date } = req.body;
      const productDiscount = await ProductDiscount.create({
        store_id,
        discount_rate,
        quota,
        start_date,
        end_date,
      });
      res.status(201).json(productDiscount);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateProductDiscount(req, res) {
    try {
      const { store_id, discount_rate, quota, start_date, end_date } = req.body;
      const [updated] = await ProductDiscount.update(
        { store_id, discount_rate, quota, start_date, end_date },
        { where: { product_discount_id: req.params.id } }
      );
      if (updated) {
        const updatedProductDiscount = await ProductDiscount.findByPk(req.params.id);
        res.status(200).json(updatedProductDiscount);
      } else {
        res.status(404).json({ error: 'Product discount not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteProductDiscount(req, res) {
    try {
      const deleted = await ProductDiscount.destroy({
        where: { product_discount_id: req.params.id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Product discount not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
