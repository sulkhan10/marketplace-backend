'use strict';

const { ShippingMethod } = require('../models');

class ShippingMethodController {
  // Get all shipping methods
  static async getAllShippingMethods(req, res, next) {
    try {
      const shippingMethods = await ShippingMethod.findAll();
      res.status(200).json(shippingMethods);
    } catch (error) {
      next(error);
    }
  }

  // Get a single shipping method by ID
  static async getShippingMethodById(req, res, next) {
    try {
      const shippingMethod = await ShippingMethod.findByPk(req.params.id);
      if (shippingMethod) {
        res.status(200).json(shippingMethod);
      } else {
        res.status(404).json({ error: 'Shipping method not found' });
      }
    } catch (error) {
      next(error);
    }
  }

  // Create a new shipping method
  static async createShippingMethod(req, res, next) {
    try {
      const { method_name } = req.body;
      const shippingMethod = await ShippingMethod.create({ method_name });
      res.status(201).json(shippingMethod);
    } catch (error) {
      next(error);
    }
  }

  // Update an existing shipping method by ID
  static async updateShippingMethod(req, res, next) {
    try {
      const { method_name } = req.body;
      const [updated] = await ShippingMethod.update({ method_name }, {
        where: { shipping_method_id: req.params.id }
      });
      if (updated) {
        const updatedShippingMethod = await ShippingMethod.findByPk(req.params.id);
        res.status(200).json(updatedShippingMethod);
      } else {
        res.status(404).json({ error: 'Shipping method not found' });
      }
    } catch (error) {
      next(error);
    }
  }

  // Delete a shipping method by ID
  static async deleteShippingMethod(req, res, next) {
    try {
      const deleted = await ShippingMethod.destroy({
        where: { shipping_method_id: req.params.id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Shipping method not found' });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ShippingMethodController;
