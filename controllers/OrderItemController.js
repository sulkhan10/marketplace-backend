const { OrderItem, Order, Product } = require('../models');

class OrderItemController {
  static async getAllOrderItems(req, res) {
    try {
      const orderItems = await OrderItem.findAll({
        include: [
          { model: Order, as: 'order' },
          { model: Product, as: 'product' }
        ]
      });
      res.status(200).json(orderItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getOrderItemById(req, res) {
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
        res.status(404).json({ message: 'OrderItem not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createOrderItem(req, res) {
    try {
      const { order_id, product_id, quantity, price } = req.body;
      const newOrderItem = await OrderItem.create({ order_id, product_id, quantity, price });
      res.status(201).json(newOrderItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateOrderItem(req, res) {
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
        res.status(404).json({ message: 'OrderItem not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteOrderItem(req, res) {
    try {
      const { id } = req.params;
      const deleted = await OrderItem.destroy({
        where: { order_item_id: id }
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'OrderItem not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = OrderItemController;
