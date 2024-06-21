'use strict';

const { ReceiptDiscount, Store, Product } = require('../models');

class ReceiptDiscountController {
  static async getAllReceiptDiscounts(req, res, next) {
    try {
      const receiptDiscounts = await ReceiptDiscount.findAll({
        include: [{ model: Store, as: 'store' }]
      });
      res.status(200).json(receiptDiscounts);
    } catch (error) {
      next(error);
    }
  }

  static async getReceiptDiscountById(req, res, next) {
    try {
      const receiptDiscount = await ReceiptDiscount.findByPk(req.params.id, {
        include: [{ model: Store, as: 'store' }]
      });
      if (receiptDiscount) {
        res.status(200).json(receiptDiscount);
      } else {
        next({ name: 'NotFound' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getReceiptDiscountsByStoreId(req, res, next) {
    try {
      const receiptDiscounts = await ReceiptDiscount.findAll({
        where: { store_id: req.params.storeId },
        include: [{ model: Store, as: 'store' }]
      });
      if (receiptDiscounts.length > 0) {
        res.status(200).json(receiptDiscounts);
      } else {
        next({ name: 'NotFound' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async createReceiptDiscount(req, res, next) {
    try {
      const { store_id, discount_rate, quota, start_date, end_date } = req.body;
      const receiptDiscount = await ReceiptDiscount.create({
        store_id,
        discount_rate,
        quota,
        start_date,
        end_date,
      });
      res.status(201).json(receiptDiscount);
    } catch (error) {
      next(error);
    }
  }

  static async updateReceiptDiscount(req, res, next) {
    try {
      const { store_id, discount_rate, quota, start_date, end_date } = req.body;
      const [updated] = await ReceiptDiscount.update(
        { store_id, discount_rate, quota, start_date, end_date },
        { where: { receipt_discount_id: req.params.id } }
      );
      if (updated) {
        const updatedReceiptDiscount = await ReceiptDiscount.findByPk(req.params.id, {
          include: [{ model: Store, as: 'store' }]
        });
        res.status(200).json(updatedReceiptDiscount);
      } else {
        next({ name: 'NotFound' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteReceiptDiscount(req, res, next) {
    try {
      const deleted = await ReceiptDiscount.destroy({
        where: { receipt_discount_id: req.params.id }
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

module.exports = ReceiptDiscountController;
