'use strict';

const { OrderItem, Order, Product } = require('../models');

class OrderItemController {
  static async getAllOrderItems(req, res, next) {
    try {
      const orderItems = await OrderItem.findAll({
        include: [
          { model: Order, as: 'order' },
          { model: Product, as: 'product' }
        ]
      });
      res.status(200).json(orderItems);
    } catch (error) {
      next(error);
    }
  }

  static async getOrderItemById(req, res, next) {
    try {
      const { id } = req.params;
      const orderItem = await OrderItem.findByPk(id, {
        include: [
          { model: Order, as: 'order' },
          { model: Product, as: 'product' }
        ]
      });
      if (orderItem) {
        res.status(200).json(orderItem);
      } else {
        const error = new Error('OrderItem not found');
        error.name = 'NotFound';
        throw error;
      }
    } catch (error) {
      next(error);
    }
  }

  static async getOrderItemsByOrderId(req, res, next) {
    try {
      const { order_id } = req.params;
      const orderItems = await OrderItem.findAll({
        where: { order_id },
        include: [
          { model: Order, as: 'order' },
          { model: Product, as: 'product' }
        ]
      });
      res.status(200).json(orderItems);
    } catch (error) {
      next(error);
    }
  }

  static async getOrderItemsByProductId(req, res, next) {
    try {
      const { product_id } = req.params;
      const orderItems = await OrderItem.findAll({
        where: { product_id },
        include: [
          { model: Order, as: 'order' },
          { model: Product, as: 'product' }
        ]
      });
      res.status(200).json(orderItems);
    } catch (error) {
      next(error);
    }
  }

  static async createOrderItem(req, res, next) {
    try {
      const { order_id, product_id, quantity, price } = req.body;
      const newOrderItem = await OrderItem.create({ order_id, product_id, quantity, price });
      res.status(201).json(newOrderItem);
    } catch (error) {
      next(error);
    }
  }

  static async updateOrderItem(req, res, next) {
    try {
      const { id } = req.params;
      const { order_id, product_id, quantity, price } = req.body;
      const [updated] = await OrderItem.update({ order_id, product_id, quantity, price }, {
        where: { order_item_id: id }
      });
      if (updated) {
        const updatedOrderItem = await OrderItem.findByPk(id);
        res.status(200).json(updatedOrderItem);
      } else {
        const error = new Error('OrderItem not found');
        error.name = 'NotFound';
        throw error;
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteOrderItem(req, res, next) {
    try {
      const { id } = req.params;
      const deleted = await OrderItem.destroy({
        where: { order_item_id: id }
      });
      if (deleted) {
        res.status(204).send();
      } else {
        const error = new Error('OrderItem not found');
        error.name = 'NotFound';
        throw error;
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrderItemController;
