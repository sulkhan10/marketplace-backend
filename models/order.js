'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Store, { foreignKey: 'store_id' , as : "store"});
      Order.belongsTo(models.User, { foreignKey: 'user_id' , as : "user"});
      Order.belongsTo(models.ReceiptDiscount, { foreignKey: 'receipt_discount_id' , as : "receipt_discount"});
      Order.belongsTo(models.PaymentMethod, { foreignKey: 'payment_method_id' , as : "payment_method"});
      Order.belongsTo(models.ShippingMethod, { foreignKey: 'shipping_method_id' , as : "shipping_method"});
    }
  }
  Order.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.FLOAT,
      },
      discount_amount: {
        type: DataTypes.FLOAT,
      },
      cashback_amount: {
        type: DataTypes.FLOAT,
      },
      final_price: {
        type: DataTypes.FLOAT,
      },
      order_date: {
        type: DataTypes.DATE,
      },
      receipt_discount_id: {
        type: DataTypes.INTEGER,
      },
      payment_method_id: {
        type: DataTypes.INTEGER,
      },
      shipping_method_id: {
        type: DataTypes.INTEGER,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'Orders',
      underscored: true,
    }
  );
  return Order;
};
