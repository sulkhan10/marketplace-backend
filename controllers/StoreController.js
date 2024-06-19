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
  // Get all stores
  static async getAllStores(req, res, next) {
    try {
      const stores = await Store.findAll({
        include: [
          { model: User, as: "user", attributes: { exclude: ["password","bank_account_id","role"] } },
          {
            model: Product,
            as: "product",
            include: [
              { model: ProductCategory, as: "productCategory" },
              {
                model: ProductDiscount,
                as: "productDiscount",
              },
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

  // Get a single store by ID
  static async getStoreById(req, res, next) {
    try {
      const { id } = req.params;
      const store = await Store.findByPk(id, {
      include: [
          { model: User, as: "user", attributes: { exclude: ["password","bank_account_id","role"] } },
          {
            model: Product,
            as: "product",
            include: [
              { model: ProductCategory, as: "productCategory" },
              {
                model: ProductDiscount,
                as: "productDiscount",
              },
            ],
          },
          { model: ReceiptDiscount, as: "receiptDiscount" },
        ],
      });
      if (!store) {
        return res.status(404).json({ message: "Store not found" });
      }
      res.status(200).json(store);
    } catch (error) {
      next(error);
    }
  }

  // Create a new store
  static async createStore(req, res, next) {
    try {
      const { store_name, address, city, postal_code, country, user_id } = req.body;
      const newStore = await Store.create({
        store_name,
        address,
        city,
        postal_code,
        country,
        user_id
      });
      res.status(201).json(newStore);
    } catch (error) {
      next(error);
    }
  }

  // Update an existing store by ID
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
        return res.status(404).json({ message: "Store not found" });
      }
      const updatedStore = await Store.findByPk(id);
      res.status(200).json(updatedStore);
    } catch (error) {
      next(error);
    }
  }

  // Delete a store by ID
  static async deleteStore(req, res, next) {
    try {
      const { id } = req.params;
      const deleted = await Store.destroy({ where: { store_id: id } });
      if (!deleted) {
        return res.status(404).json({ message: "Store not found" });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = StoreController;
