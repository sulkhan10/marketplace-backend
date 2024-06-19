'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        store_id: 1,  // Ensure this store_id exists in your Stores table
        product_name: 'Example Product 1',
        description: 'This is an example product.',
        weight: 100,
        length: 10,
        width: 5,
        height: 5,
        price: 19.99,
        stock_quantity: 50,
        product_category_id: 1,  // Ensure this product_category_id exists in your ProductCategories table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 1,  // Ensure this store_id exists in your Stores table
        product_name: 'Example Product 2',
        description: 'This is another example product.',
        weight: 150,
        length: 15,
        width: 7,
        height: 7,
        price: 29.99,
        stock_quantity: 30,
        product_category_id: 1,  // Ensure this product_category_id exists in your ProductCategories table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
