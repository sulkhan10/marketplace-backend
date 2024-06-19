'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('OrderItems', [
      {
        order_id: 1,
        product_id: 1,
        quantity: 2,
        price: 19.99,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 1,
        product_id: 2,
        quantity: 1,
        price: 9.99,
        created_at: new Date(),
        updated_at: new Date(),
      },
 
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrderItems', null, {});
  }
};
