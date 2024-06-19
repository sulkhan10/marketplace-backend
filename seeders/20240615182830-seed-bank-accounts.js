'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('BankAccounts', [
      {
        bank_name: 'Bank A',
        account_number: '111111',
        account_holder_name: 'Holder A',
  
      },
      {
        bank_name: 'Bank B',
        account_number: '222222',
        account_holder_name: 'Holder B',
   
      },
      // Add more bank accounts as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BankAccounts', null, {});
  }
};
