const { db } = require("./index.js");

const createUser = (req, res, next) => {
  db
    .one(
      "INSERT INTO users(email, age, gender, first_name, last_name, image_url, location) VALUES(${email}, ${age}, ${gender}, ${first_name}, ${last_name}, ${image_url}, ${location}) RETURNING *",
      req.body
    )
    .then(data => {
      res.status(200).json({
        newUser: data,
        status: "success",
        message: "NEW USER ADDED!"
      });
    })
    .catch(err => next(err));
};

const getUser = (req, res, next) => {
  db
    .one("SELECT * FROM users WHERE id = " + Number(req.params.id))
    .then(data => {
      res.status(200).json({
        user: data,
        status: "success",
        message: "USER RETREIVED!"
      });
    })
    .catch(err => next(err));
};

const getUsersPins = (req, res, next) => {
  db
    .any("SELECT * FROM pins WHERE user_id = " + Number(req.params.id))
    .then(pins => {
      res.status(200).json({
        pins,
        status: "success",
        message: "RETREIVED USERS PINS"
      });
    })
    .catch(err => next(err));
};

const getUsersBoards = (req, res, next) => {
  db
    .any("SELECT * FROM boards WHERE user_id = " + Number(req.params.id))
    .then(boards => {
      res.status(200).json({
        boards,
        status: "success",
        message: "RETREIVED USERS PINS"
      });
    })
    .catch(err => next(err));
};

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db
    .result("DELETE FROM users WHERE id=$1", userId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "DELETED USER",
        result: result
      });
    })
    .catch(err => {
      return next(err);
    });
};

const updateUser = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ");

  if (req.body.age && req.body.age.toLowerCase() === "null") {
    req.body.age = null;
  }
  db
    .none(
      "UPDATE users SET " + queryString + " WHERE id=" + req.params.id,
      req.body
    )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "UPDATE USER"
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  createUser,
  getUser,
  getUsersPins,
  getUsersBoards,
  deleteUser,
  updateUser
};
