'use strict';

const { BankAccount, User } = require("../models");

class BankAccountController {
  static async readAllBankAccount(req, res, next) {
    try {
      const bankAccounts = await BankAccount.findAll({
        include: [
          {
            model: User,
            as: "user",
            attributes: { exclude: ["password"] },
          },
        ],
      });
      res.status(200).json(bankAccounts);
    } catch (error) {
      next(error);
    }
  }

  static async readBankAccountsByUserId(req, res, next) {
    try {
      const { userId } = req.params;
      const bankAccounts = await User.findOne({
        where: { user_id: userId },
        attributes: { exclude: ["password"] },
        include: [
          {
            model: BankAccount,
            as: "bankAccount",
          },
        ],
      });
      res.status(200).json(bankAccounts);
    } catch (error) {
      next(error);
    }
  }

  static async readBankAccountByBankAccountId(req, res, next) {
    try {
      const { bankAccountId } = req.params;
      const bankAccount = await BankAccount.findOne({
        where: { bank_account_id: bankAccountId },
        include: [
          {
            model: User,
            as: "user",
            attributes: { exclude: ["password"] },
          },
        ],
      });
      if (bankAccount) {
        res.status(200).json(bankAccount);
      } else {
        next({ name: 'NotFound' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async createBankAccount(req, res, next) {
    try {
      const { bank_name, account_number, account_holder_name, user_id } = req.body;
      const dataBankAccount = await BankAccount.create({
        bank_name,
        account_number,
        account_holder_name,
        user_id,
      });
      res.status(201).json(dataBankAccount);
    } catch (error) {
      next(error);
    }
  }

  static async updateBankAccount(req, res, next) {
    try {
      const { bankAccountId } = req.params;
      const { bank_name, account_number, account_holder_name } = req.body;
      const bankAccount = await BankAccount.findOne({
        where: { bank_account_id :  bankAccountId},
      });

      if (bankAccount) {
        const updatedBankAccount = await bankAccount.update({
          bank_name,
          account_number,
          account_holder_name,
        });
        res.status(200).json(updatedBankAccount);
      } else {
        next({ name: 'NotFound' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteBankAccount(req, res, next) {
    try {
      const { bankAccountId } = req.params;
      const bankAccount = await BankAccount.findOne({
        where: { bank_account_id: bankAccountId },
      });

      if (bankAccount) {
        await bankAccount.destroy();
        res.status(204).json({ message: "BankAccount has been deleted" });
      } else {
        next({ name: 'NotFound' });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BankAccountController;
