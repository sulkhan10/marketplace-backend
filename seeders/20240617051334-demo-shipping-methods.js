'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ShippingMethods', [
      {
        method_name: 'Standard Shipping',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        method_name: 'Express Shipping',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        method_name: 'Next Day Delivery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ShippingMethods', null, {});
  }
};
