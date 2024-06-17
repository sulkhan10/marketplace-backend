'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductCategories', [
      {
        store_id: 1,  // Ensure this store_id exists in your Stores table
        product_category_name: 'Electronics',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        store_id: 1,  // Ensure this store_id exists in your Stores table
        product_category_name: 'Books',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
