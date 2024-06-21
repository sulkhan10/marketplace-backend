"use strict";
const {
  Store,
  User,
  ProductDiscount,
  ProductCategory,
  Product,
  ReceiptDiscount,
} = require("../models");

class StoreController {
  static async getAllStores(req, res, next) {
    try {
      const stores = await Store.findAll({
        include: [
          {
            model: User,
            as: "user",
            attributes: { exclude: ["password", "bank_account_id", "role"] },
          },
          {
            model: Product,
            as: "product",
            include: [
              { model: ProductCategory, as: "productCategory" },
              { model: ProductDiscount, as: "productDiscount" },
            ],
          },
          { model: ReceiptDiscount, as: "receiptDiscount" },
        ],
      });

      res.status(200).json(stores);
    } catch (error) {
      next(error);
    }
  }

  static async getStoreById(req, res, next) {
    try {
      const { id } = req.params;
      const store = await Store.findByPk(id, {
        include: [
          {
            model: User,
            as: "user",
            attributes: { exclude: ["password", "bank_account_id", "role"] },
          },
          {
            model: Product,
            as: "product",
            include: [
              { model: ProductCategory, as: "productCategory" },
              { model: ProductDiscount, as: "productDiscount" },
            ],
          },
          { model: ReceiptDiscount, as: "receiptDiscount" },
        ],
      });
      if (!store) {
        return next({ name: "NotFound" });
      }
      res.status(200).json(store);
    } catch (error) {
      next(error);
    }
  }

  static async createStore(req, res, next) {
    try {
      const { store_name, address, city, postal_code, country, user_id } =
        req.body;
      const newStore = await Store.create({
        store_name,
        address,
        city,
        postal_code,
        country,
        user_id,
      });
      res.status(201).json(newStore);
    } catch (error) {
      next(error);
    }
  }

  static async updateStore(req, res, next) {
    try {
      const { id } = req.params;
      const { store_name, address, city, postal_code, country } = req.body;
      const [updated] = await Store.update(
        { store_name, address, city, postal_code, country },
        {
          where: { store_id: id },
        }
      );
      if (!updated) {
        return next({ name: "NotFound" });
      }
      const updatedStore = await Store.findByPk(id);
      res.status(200).json(updatedStore);
    } catch (error) {
      next(error);
    }
  }

  static async deleteStore(req, res, next) {
    try {
      const { id } = req.params;
      const deleted = await Store.destroy({ where: { store_id: id } });
      if (!deleted) {
        return next({ name: "NotFound" });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = StoreController;
