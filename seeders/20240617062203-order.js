'use strict';

const { Order } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [
      {
        store_id: 1,
        user_id: 1,
        total_price: 100.0,
        discount_amount: 10.0,
        cashback_amount: 5.0,
        final_price: 85.0,
        order_date: new Date('2024-07-01'),
        receipt_discount_id: 1,
        payment_method_id: 1,
        shipping_method_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Add more data as needed
    ];

    await queryInterface.bulkInsert('Orders', data);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
