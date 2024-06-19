const { decodeToken } = require("../helpers/jwt");
let { User } = require("../models");

async function authentication(req, res, next) {
    try {
      let { access_token } = req.headers;
      // console.log(req);
      // console.log(access_token);
      if (!access_token) {
        throw { name: "Unauthenticated" };
      }
      let payload = decodeToken(access_token);
      console.log(payload);
      let user = await User.findByPk(payload.id);
      if (!user) {
        throw { name: "Unauthenticated" };
      };
      req.user = {
        id: user.user_id,
        username: user.username,
      };
      next();
    } catch (error) {
      next(error);
      
    }
  }

  module.exports = authentication