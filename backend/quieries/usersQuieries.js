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
    .one("SELECT users.id, users.email, users.age, users.first_name, users.last_name, users.location, users.image_url AS avatar, users.gender,  ARRAY_REMOVE(ARRAY_AGG(DISTINCT boards.id), NULL) AS user_boards, ARRAY_REMOVE(ARRAY_AGG(DISTINCT pins.id), NULL) AS user_pins FROM users  LEFT JOIN boards ON boards.user_id = users.id LEFT JOIN pins ON pins.user_id = users.id WHERE users.id = $1 GROUP BY users.id, users.email, users.age, users.first_name, users.last_name, users.location, users.image_url, users.gender", Number(req.params.id))
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
    .any("SELECT boards.id, boards.user_id, pin_ref.board_pins FROM boards JOIN (SELECT user_boards.id  AS board_id, array_agg(pins.id) AS board_pins FROM pins JOIN (SELECT * FROM boards WHERE boards.user_id =$1) AS user_boards ON pins.board_id = user_boards.id GROUP BY user_boards.id) AS pin_ref ON pin_ref.board_id = boards.id", Number(req.params.id))
    .then(boards => {
      res.status(200).json({
        boards,
        status: "success",
        message: "RETREIVED USERS BOARDS"
      });
    })
    .catch(err => next(err));
};

// SELECT boards.id, boards.user_id, pin_ref.board_pins FROM boards JOIN (SELECT user_boards.id  AS board_id, array_agg(pins.id) AS board_pins FROM pins JOIN (SELECT * FROM boards WHERE boards.user_id = 2) AS user_boards ON pins.board_id = user_boards.id GROUP BY user_boards.id) AS pin_ref ON pin_ref.board_id = boards.id

const getCurrentUsersBoards = (req, res, next) => {
  db
    .any("SELECT boards.id, boards.user_id, pin_ref.board_pins FROM boards JOIN (SELECT user_boards.id  AS board_id, array_agg(pins.id) AS board_pins FROM pins JOIN (SELECT * FROM boards WHERE boards.user_id =$1) AS user_boards ON pins.board_id = user_boards.id GROUP BY user_boards.id) AS pin_ref ON pin_ref.board_id = boards.id" + req.user.id)
    .then(boards => {
      res.status(200).json({
        boards,
        status: "success",
        message: "RETREIVED USERS BOARDS"
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
  getCurrentUsersBoards,
  deleteUser,
  updateUser
};
