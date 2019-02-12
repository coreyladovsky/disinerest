let { db } = require("../quieries/index.js");
const bcrypt = require("bcryptjs");

function comparePasswords(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

// function createUser(req) {
//   const salt = bcrypt.genSaltSync();
//   const hash = bcrypt.hashSync(req.body.password, salt);
//   return db.none(
//     "INSERT INTO users (username, password_digest) VALUES (${username}, ${password})",
//     { username: req.body.username, password: hash }
//   );
// }

function createHashPassword(password) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

function loginRequired(req, res, next) {
  if (req.user) {
    res.status(401).json({ status: "Please Log In!" });
    return;
  }
  next();
}

module.exports = { comparePasswords, createHashPassword, loginRequired };
