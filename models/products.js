"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
      Product.belongsTo(models.Store, { foreignKey: "store_id", as: "store" });
      Product.belongsTo(models.ProductCategory, {
        foreignKey: "product_category_id",
        as: "productCategory",
      });
    }
  }
  Product.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      store_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Store",
          key: "store_id",
        },
        onDelete: "CASCADE",
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      width: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "ProductCategory",
          key: "product_category_id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Product",
      timestamps: true,
    }
  );
  return Product;
};
