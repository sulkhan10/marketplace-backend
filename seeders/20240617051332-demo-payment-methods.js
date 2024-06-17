'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PaymentMethods', [
      {
        method_name: 'Credit Card',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        method_name: 'PayPal',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        method_name: 'Bank Transfer',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PaymentMethods', null, {});
  }
};
