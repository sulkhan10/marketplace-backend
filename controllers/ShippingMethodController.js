'use strict';

const { ShippingMethod } = require('../models');

class ShippingMethodController {
  // Get all shipping methods
  static async getAllShippingMethods(req, res) {
    try {
      const shippingMethods = await ShippingMethod.findAll();
      res.status(200).json(shippingMethods);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get a single shipping method by ID
  static async getShippingMethodById(req, res) {
    try {
      const shippingMethod = await ShippingMethod.findByPk(req.params.id);
      if (shippingMethod) {
        res.status(200).json(shippingMethod);
      } else {
        res.status(404).json({ error: 'Shipping method not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Create a new shipping method
  static async createShippingMethod(req, res) {
    try {
      const { method_name } = req.body;
      const shippingMethod = await ShippingMethod.create({ method_name });
      res.status(201).json(shippingMethod);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update an existing shipping method by ID
  static async updateShippingMethod(req, res) {
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
      res.status(500).json({ error: error.message });
    }
  }

  // Delete a shipping method by ID
  static async deleteShippingMethod(req, res) {
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
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ShippingMethodController;
