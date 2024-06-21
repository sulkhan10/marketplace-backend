'use strict';
const { hashPassword } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      {
        username: 'user1',
        password: hashPassword('password123'),
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        role: 'admin',
        phone: '1234567890',
        createdAt: new Date(),
      },
      {
        username: 'user2',
        password: hashPassword('password456'),
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane.doe@example.com',
        role: 'user',
        phone: '0987654321',
        createdAt: new Date(),
      }
    ];

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
