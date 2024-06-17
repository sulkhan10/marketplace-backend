const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(12);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { hashPassword, comparePassword };
