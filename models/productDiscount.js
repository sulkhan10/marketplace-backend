'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductDiscount extends Model {
    static associate(models) {
      ProductDiscount.belongsTo(models.Store, { foreignKey: 'store_id' , as : "store"});
      // ProductDiscount.belongsTo(models.Product, { foreignKey: 'product_id' , as : "product"});
      ProductDiscount.hasOne(models.Product, { foreignKey: 'product_id' , as : "product"});
      

    }
  }
  ProductDiscount.init(
    {
      product_discount_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
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
      modelName: 'ProductDiscount',
      tableName: 'ProductDiscounts',
      underscored: true,
    }
  );
  return ProductDiscount;
};
