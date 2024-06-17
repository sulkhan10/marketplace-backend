"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Store, { foreignKey: "store_id", as: "store" });
      User.belongsTo(models.BankAccount, { foreignKey: "bank_account_id", as: "bankAccount" });
    }
  }

  User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      store_id: {
        type: DataTypes.INTEGER,
        unique: true,
        references: {
          model: 'Stores',  // 'Stores' refers to table name
          key: 'store_id',
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Username is required",
          },
          notNull: {
            msg: "Username is required",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password is required",
          },
          notNull: {
            msg: "Password is required",
          },
          minimumLength(value) {
            if (value.length < 5) {
              throw new Error("Minimal password is 5 characters");
            }
          },
        },
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: "Must be a valid email address",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      bank_account_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'BankAccounts',  // 'BankAccounts' refers to table name
          key: 'bank_account_id',
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: false,  // If you're not using timestamps
      underscored: true,  // To convert camelCase to snake_case
    }
  );

  User.beforeCreate(async (user) => {
    user.password = await hashPassword(user.password);
  });

  return User;
};
