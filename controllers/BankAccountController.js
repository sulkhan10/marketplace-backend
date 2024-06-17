const { BankAccount } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const axios = require('axios')

class BankAccountController {
  
  static async readAllBankAccount(req, res, next) {
    try {
        let {bankAccountId} = req.params 
        console.log(req.params);
      let bankAccount = await BankAccount.findByPk(bankAccountId);
    console.log(bankAccount);
      res.status(200).json(bankAccount);
    } catch (error) {
      next(error);
    }
  }
  static async readBankAccountByBankAccountId(req, res, next) {
    try {
      let bankAccount = await BankAccount.findAll();
    console.log(bankAccount);
      res.status(200).json(bankAccount);
    } catch (error) {
      next(error);
    }
  }
  static async createBankAccount(req, res, next) {
    try {
       let {bank_name,account_number,account_holder_name} = req.body
       console.log(req.body);
      
    let dataBankAccount = await BankAccount.create({
      bank_name,account_number,account_holder_name
    })
      res.status(201).json(dataBankAccount);
    } catch (error) {
      next(error);
    }
  }
  static async updateBankAccount(req, res, next) {
    try {
       let {bank_account_id,bank_name,account_number,account_holder_name} = req.body
       console.log(req.body);
       const bankAccount = await BankAccount.findOne({
        where: { bank_account_id },
      });
  
    let dataBankAccount = await bankAccount.update({
      bank_name,account_number,account_holder_name
    })
      res.status(201).json(dataBankAccount);
    } catch (error) {
      next(error);
    }
  }
  static async deleteBankAccount(req, res, next) {
    try {
       let {bankAccountId} = req.params
       console.log(req.body);
       const bankAccount = await BankAccount.findOne({
        where: { bank_account_id : bankAccountId},
      });
     
    let dataBankAccount = await bankAccount.destroy()
      res.status(200).json({message : "BankAccount has been deleted"});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BankAccountController;
