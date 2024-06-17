'use strict';

const { ReceiptDiscount } = require('../models');

module.exports = {
  async getAllReceiptDiscounts(req, res) {
    try {
      const receiptDiscounts = await ReceiptDiscount.findAll();
      res.status(200).json(receiptDiscounts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getReceiptDiscountById(req, res) {
    try {
      const receiptDiscount = await ReceiptDiscount.findByPk(req.params.id);
      if (receiptDiscount) {
        res.status(200).json(receiptDiscount);
      } else {
        res.status(404).json({ error: 'Receipt discount not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createReceiptDiscount(req, res) {
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
      res.status(500).json({ error: error.message });
    }
  },

  async updateReceiptDiscount(req, res) {
    try {
      const { store_id, discount_rate, quota, start_date, end_date } = req.body;
      const [updated] = await ReceiptDiscount.update(
        { store_id, discount_rate, quota, start_date, end_date },
        { where: { receipt_discount_id: req.params.id } }
      );
      if (updated) {
        const updatedReceiptDiscount = await ReceiptDiscount.findByPk(req.params.id);
        res.status(200).json(updatedReceiptDiscount);
      } else {
        res.status(404).json({ error: 'Receipt discount not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteReceiptDiscount(req, res) {
    try {
      const deleted = await ReceiptDiscount.destroy({
        where: { receipt_discount_id: req.params.id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Receipt discount not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
