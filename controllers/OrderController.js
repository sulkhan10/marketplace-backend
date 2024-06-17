'use strict';

const { Order } = require('../models');

module.exports = {
  async getAllOrders(req, res) {
    try {
      const orders = await Order.findAll();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getOrderById(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ error: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createOrder(req, res) {
    try {
      const {
        store_id,
        user_id,
        total_price,
        discount_amount,
        cashback_amount,
        final_price,
        order_date,
        receipt_discount_id,
        payment_method_id,
        shipping_method_id
      } = req.body;
      const order = await Order.create({
        store_id,
        user_id,
        total_price,
        discount_amount,
        cashback_amount,
        final_price,
        order_date,
        receipt_discount_id,
        payment_method_id,
        shipping_method_id
      });
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateOrder(req, res) {
    try {
      const {
        store_id,
        user_id,
        total_price,
        discount_amount,
        cashback_amount,
        final_price,
        order_date,
        receipt_discount_id,
        payment_method_id,
        shipping_method_id
      } = req.body;
      const [updated] = await Order.update(
        {
          store_id,
          user_id,
          total_price,
          discount_amount,
          cashback_amount,
          final_price,
          order_date,
          receipt_discount_id,
          payment_method_id,
          shipping_method_id
        },
        { where: { order_id: req.params.id } }
      );
      if (updated) {
        const updatedOrder = await Order.findByPk(req.params.id);
        res.status(200).json(updatedOrder);
      } else {
        res.status(404).json({ error: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteOrder(req, res) {
    try {
      const deleted = await Order.destroy({
        where: { order_id: req.params.id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
