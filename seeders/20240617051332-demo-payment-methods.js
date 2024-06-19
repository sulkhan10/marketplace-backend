'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PaymentMethods', [
      {
        method_name: 'Credit Card',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        method_name: 'PayPal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        method_name: 'Bank Transfer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PaymentMethods', null, {});
  }
};
