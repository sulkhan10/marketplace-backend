'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Stores', [
      {
        store_name: 'Store A',
        address: '123 Main St',
        city: 'Townsville',
        postal_code: '12345',
        country: 'Country A',
        user_id : 2
      },
      {
        store_name: 'Store B',
        address: '456 Side St',
        city: 'Villagetown',
        postal_code: '67890',
        country: 'Country B',
        user_id : 1
      },
      // Add more stores as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
