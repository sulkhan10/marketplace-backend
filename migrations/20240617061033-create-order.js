'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      order_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      store_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stores',
          key: 'store_id',
        },
         
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'user_id',
        },
         
      },
      total_price: {
        type: Sequelize.FLOAT,
      },
      discount_amount: {
        type: Sequelize.FLOAT,
      },
      cashback_amount: {
        type: Sequelize.FLOAT,
      },
      final_price: {
        type: Sequelize.FLOAT,
      },
      order_date: {
        type: Sequelize.DATE, // Changed from TIMESTAMP to DATE
      },
      receipt_discount_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ReceiptDiscounts',
          key: 'receipt_discount_id',
        },
      },
      payment_method_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PaymentMethods',
          key: 'payment_method_id',
        },
      },
      shipping_method_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ShippingMethods',
          key: 'shipping_method_id',
        },
         
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};
