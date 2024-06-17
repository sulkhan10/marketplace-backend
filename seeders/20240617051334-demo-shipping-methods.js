'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ShippingMethods', [
      {
        method_name: 'Standard Shipping',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        method_name: 'Express Shipping',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        method_name: 'Next Day Delivery',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ShippingMethods', null, {});
  }
};
