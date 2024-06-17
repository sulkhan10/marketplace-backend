const { Store } = require("../models");


class StoreController {
 
  static async allStore(req, res, next) {
    console.log(req.user);
    try {
      let units = await Store.findAll();
      res.status(201).json(units);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = StoreController;
