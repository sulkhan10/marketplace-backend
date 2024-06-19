"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      Store.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
      Store.hasMany(models.ProductDiscount, { foreignKey: "store_id", as: "productDiscount" });
      Store.hasMany(models.ProductCategory, { foreignKey: "product_category_id", as: "productCategory" });
      Store.hasMany(models.Product, { foreignKey: "product_id", as: "product" });
      Store.hasMany(models.ReceiptDiscount, { foreignKey: "receipt_discount_id", as: "receiptDiscount" });
      
      // Store.hasOne(models.User, { foreignKey: "store_id", as: "user" });
      // Store.hasMany(models.ProductDiscount, { foreignKey: "store_id", as: "productDiscount" });
      // Store.hasMany(models.ProductCategory, { foreignKey: "store_id", as: "productCategories" });
      // Store.hasMany(models.Product, { foreignKey: "store_id", as: "products" });
      // Store.hasMany(models.ReceiptDiscount, { foreignKey: "store_id", as: "receiptDiscounts" });
    }
  }

  Store.init(
    {
      store_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        unique: true,
        references: {
          model: 'Users',  // 'Stores' refers to table name
          key: 'user_id',
        },
      },
      store_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      postal_code: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Store",
      tableName: "Stores",
      timestamps: false,
    }
  );

  return Store;
};
