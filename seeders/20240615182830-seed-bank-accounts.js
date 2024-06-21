'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('BankAccounts', [
      {
        bank_name: 'Bank A',
        account_number: '111111',
        account_holder_name: 'Holder A',
        user_id: 1,

  
      },
      {
        bank_name: 'Bank B',
        account_number: '222222',
        account_holder_name: 'Holder B',
        user_id: 2,

   
      },
      // Add more bank accounts as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BankAccounts', null, {});
  }
};
