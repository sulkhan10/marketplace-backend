'use strict';

const { ProductDiscount } = require('../models');

class ProductDiscountController {
  static async getAllProductDiscounts(req, res, next) {
    try {
      const productDiscounts = await ProductDiscount.findAll();
      res.status(200).json(productDiscounts);
    } catch (error) {
      next(error);
    }
  }

  static async getProductDiscountById(req, res, next) {
    try {
      const productDiscount = await ProductDiscount.findByPk(req.params.id);
      if (productDiscount) {
        res.status(200).json(productDiscount);
      } else {
        next({ name: 'NotFound' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getProductDiscountsByStoreId(req, res, next) {
    try {
      const productDiscounts = await ProductDiscount.findAll({
        where: { store_id: req.params.storeId },
      });
      if (productDiscounts.length > 0) {
        res.status(200).json(productDiscounts);
      } else {
        next({ name: 'NotFound' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async createProductDiscount(req, res, next) {
    try {
      const { store_id, discount_rate, quota, start_date, end_date,product_id } = req.body;
      const productDiscount = await ProductDiscount.create({
        store_id,
        discount_rate,
        quota,
        start_date,
        end_date,
        product_id
      });
      res.status(201).json(productDiscount);
    } catch (error) {
      next(error);
    }
  }

  static async updateProductDiscount(req, res, next) {
    try {
      const { store_id, discount_rate, quota, start_date, end_date,product_id } = req.body;
      const [updated] = await ProductDiscount.update(
        { store_id, discount_rate, quota, start_date, end_date,product_id },
        { where: { product_discount_id: req.params.id } }
      );
      if (updated) {
        const updatedProductDiscount = await ProductDiscount.findByPk(req.params.id);
        res.status(200).json(updatedProductDiscount);
      } else {
        next({ name: 'NotFound' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteProductDiscount(req, res, next) {
    try {
      const deleted = await ProductDiscount.destroy({
        where: { product_discount_id: req.params.id },
      });
      if (deleted) {
        res.status(204).json();
      } else {
        next({ name: 'NotFound' });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductDiscountController;
