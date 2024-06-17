'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ReceiptDiscounts', {
      receipt_discount_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      store_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Stores',
          key: 'store_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      discount_rate: {
        type: Sequelize.FLOAT,
      },
      quota: {
        type: Sequelize.INTEGER,
      },
      start_date: {
        type: Sequelize.DATEONLY, // DATEONLY for date without time
      },
      end_date: {
        type: Sequelize.DATEONLY, // DATEONLY for date without time
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ReceiptDiscounts');
  }
};
