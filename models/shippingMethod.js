'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShippingMethod extends Model {
    static associate(models) {
      // define association here
    }
  }
  ShippingMethod.init(
    {
      shipping_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      method_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ShippingMethod',
      timestamps: true,
    }
  );
  return ShippingMethod;
};
