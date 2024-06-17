'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    static associate(models) {
      // define association here
      ProductCategory.belongsTo(models.Store, { foreignKey: 'store_id',as: "store" });
      ProductCategory.hasMany(models.Product, { foreignKey: 'product_id',as: "product" });
    }
  }
  ProductCategory.init(
    {
      product_category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      store_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Store',
          key: 'store_id',
        },
        onDelete: 'CASCADE',
      },
      product_category_name: {
        type: DataTypes.STRING,
        allowNull: false,
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
      modelName: 'ProductCategory',
      timestamps: true,
    }
  );
  return ProductCategory;
};
