'use strict';

const { ReceiptDiscount } = require('../models');
const { Store } = require('../models'); // Ensure you have imported the Store model if you need to reference store_id

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [
      {
        store_id: 1, // Replace with the actual store_id from your database
        discount_rate: 0.1, // Example discount rate (10%)
        quota: 100, // Example quota
        start_date: new Date('2024-07-01'), // Example start date
        end_date: new Date('2024-12-31'), // Example end date
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Add more data as needed
    ];

    await queryInterface.bulkInsert('ReceiptDiscounts', data);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ReceiptDiscounts', null, {});
  }
};
