"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class BankAccount extends Model {
    static associate(models) {
      BankAccount.belongsTo(models.User, { foreignKey: "user_id" , as: "user"});
    }
  }

  BankAccount.init(
    {
      bank_account_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bank_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      account_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      account_holder_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',  // 'BankAccounts' refers to table name
          key: 'user_id',
        },
      },
    },
    {
      sequelize,
      modelName: "BankAccount",
      tableName: "BankAccounts",
      timestamps: false,
    }
  );

  return BankAccount;
};
