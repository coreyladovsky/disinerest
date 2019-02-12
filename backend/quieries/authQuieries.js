const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");
const { db } = require("./index.js");

const registerUser = (req, res, next) => {
  const hash = authHelpers.createHashPassword(req.body.password);
  console.log('hash', hash, "body", req.body);
  db
    .none(
      "INSERT INTO users (email, password_digest) VALUES (${email}, ${password_digest})",
      {
        email: req.body.email,
        password_digest: hash,
      }
    )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      res.status(500).json({
        message: `Registration Failed    `,
        err
      });
    });
}


const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("Logged out successfully");
}

const getUser = (req, res, next) => {
  db
    .one("SELECT * FROM users WHERE email=${email}", {
      email: req.user.email
    })
    .then(data => {
      res.status(200).json({ user: data });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        data: "Error",
        err
      });
    });
}


const getSingleUser = (req, res, next) => {
  db
    .one("SELECT * FROM users WHERE email=${email}", {
      email: req.params.email
    })
    .then(data => {
      res.status(200).json({ user: data });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        data: "Error",
        err
      });
    });
}

module.exports = { registerUser, getSingleUser, getUser, logoutUser }
