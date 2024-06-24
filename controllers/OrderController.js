"use strict";

const { Order, User, Store, OrderItem, Product, ReceiptDiscount } = require("../models");
const errorHandler = require("../middlewares/errorHandler"); // Adjust the path as needed

class OrderController {
  static async getAllOrders(req, res, next) {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: User,
            as: "user",
            attributes: { exclude: ["password"] },
          },
          {
            model: OrderItem,
            as: "orderItem",
            include: [
              {
                model: Product,
                as: "product",
              },
            ],
          },
          {
            model: Store,
            as: "store",
          },
        ],
      });
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  static async getOrderById(req, res, next) {
    try {
      const order = await Order.findByPk(req.params.id, {
        include: [
          {
            model: User,
            as: "user",
            attributes: { exclude: ["password"] },
          },
          {
            model: OrderItem,
            as: "orderItem",
            include: [
              {
                model: Product,
                as: "product",
              },
            ],
          },
          {
            model: Store,
            as: "store",
          },
        ],
      });
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async createOrder(req, res, next) {
    try {
      const newOrder = req.body;
      const order = await Order.create(newOrder);
      res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }

  static async updateOrder(req, res, next) {
    try {
      const updatedOrder = req.body;
      const [updated] = await Order.update(updatedOrder, {
        where: { order_id: req.params.id },
      });
      if (updated) {
        const updatedOrder = await Order.findByPk(req.params.id);
        res.status(200).json(updatedOrder);
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteOrder(req, res, next) {
    try {
      const deleted = await Order.destroy({
        where: { order_id: req.params.id },
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getOrdersByStoreId(req, res, next) {
    try {
      const { store_id } = req.params;
      const orders = await Order.findAll({
        where: { store_id },
        include: [
          {
            model: User,
            as: "user",
            attributes: { exclude: ["password"] },
          },
          {
            model: OrderItem,
            as: "orderItem",
            include: [
              {
                model: Product,
                as: "product",
              },
            ],
          },
          {
            model: Store,
            as: "store",
          },
        ],
      });
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  static async getOrdersByUserId(req, res, next) {
    try {
      const { user_id } = req.params;
      const orders = await Order.findAll({
        where: { user_id },
        include: [
          {
            model: User,
            as: "user",
            attributes: { exclude: ["password"] },
          },
          {
            model: OrderItem,
            as: "orderItem",
            include: [
              {
                model: Product,
                as: "product",
              },
            ],
          },
          {
            model: Store,
            as: "store",
          },
        ],
      });
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  static async goToPayment(req, res, next) {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id,{
        include: [
          {
            model: User,
            as: "user",
            attributes: { exclude: ["password"] },
          },
          {
            model: ReceiptDiscount,
            as: "receiptDiscount",
          },
          {
            model: OrderItem,
            as: "orderItem",
            include: [
              {
                model: Product,
                as: "product",
              },
            ],
          },
          {
            model: Store,
            as: "store",
          },
        ],
      });

      // let receiptDiscount = await ReceiptDiscount.findByPk(order.receiptDiscount.receipt_discount_id)
      // if (receiptDiscount) {
      //   if (receiptDiscount.quota > 0) {
      //     receiptDiscount.quota -= 1;
      //     await receiptDiscount.save();
      //   } else {
      //     const error = new Error("Receipt discount quota exhausted");
      //     error.name = "Forbidden";
      //     throw error;
      //   }
      // }

      let orderItem = order.orderItem

      for (let index = 0; index < orderItem.length; index++) {
        const element = orderItem[index];
        console.log('====================================');
        console.log(element);
        console.log('====================================');
        
      }

      // if (!order) {
      //   const error = new Error("Order not found");
      //   error.name = "NotFound";
      //   throw error;
      // }
      // if (order.status !== 'CART') {
      //   const error = new Error("Order is not in a cart state");
      //   error.name = "Forbidden";
      //   throw error;
      // }
      // order.status = 'PENDING';
      // await order.save();
      let tempOrder = {

      }

      // res.status(200).json(receiptDiscount);
      // res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrderController;
