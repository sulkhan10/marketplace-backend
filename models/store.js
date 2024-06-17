"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      Store.hasOne(models.User, { foreignKey: "store_id", as: "user" });
      Store.hasMany(models.ProductCategory, { foreignKey: "product_category_id", as: "productCategory" });
    }
  }

  Store.init(
    {
      store_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      timestamps: false,
    }
  );

  return Store;
};
