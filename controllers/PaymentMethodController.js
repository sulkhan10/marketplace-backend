'use strict';

const { PaymentMethod } = require('../models');

class PaymentMethodController {
  // Get all payment methods
  static async getAllPaymentMethods(req, res, next) {
    try {
      const paymentMethods = await PaymentMethod.findAll();
      res.status(200).json(paymentMethods);
    } catch (error) {
      next(error);
    }
  }

  // Get a single payment method by ID
  static async getPaymentMethodById(req, res, next) {
    try {
      const paymentMethod = await PaymentMethod.findByPk(req.params.id);
      if (paymentMethod) {
        res.status(200).json(paymentMethod);
      } else {
        res.status(404).json({ error: 'Payment method not found' });
      }
    } catch (error) {
      next(error);
    }
  }

  // Create a new payment method
  static async createPaymentMethod(req, res, next) {
    try {
      const { method_name } = req.body;
      const paymentMethod = await PaymentMethod.create({ method_name });
      res.status(201).json(paymentMethod);
    } catch (error) {
      next(error);
    }
  }

  // Update an existing payment method by ID
  static async updatePaymentMethod(req, res, next) {
    try {
      const { method_name } = req.body;
      const [updated] = await PaymentMethod.update({ method_name }, {
        where: { payment_method_id: req.params.id }
      });
      if (updated) {
        const updatedPaymentMethod = await PaymentMethod.findByPk(req.params.id);
        res.status(200).json(updatedPaymentMethod);
      } else {
        res.status(404).json({ error: 'Payment method not found' });
      }
    } catch (error) {
      next(error);
    }
  }

  // Delete a payment method by ID
  static async deletePaymentMethod(req, res, next) {
    try {
      const deleted = await PaymentMethod.destroy({
        where: { payment_method_id: req.params.id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Payment method not found' });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PaymentMethodController;
