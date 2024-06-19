'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ReceiptDiscount extends Model {
    static associate(models) {
      ReceiptDiscount.belongsTo(models.Store, { foreignKey: 'store_id' , as : "store"});
      ReceiptDiscount.hasMany(models.Order, { foreignKey: "receipt_discount_id", as: "receipt_discount" });

    }
  }
  ReceiptDiscount.init(
    {
      receipt_discount_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discount_rate: {
        type: DataTypes.FLOAT,
      },
      quota: {
        type: DataTypes.INTEGER,
      },
      start_date: {
        type: DataTypes.DATEONLY,
      },
      end_date: {
        type: DataTypes.DATEONLY,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'ReceiptDiscount',
      tableName: 'ReceiptDiscounts',
      // underscored: true,
    }
  );
  return ReceiptDiscount;
};
