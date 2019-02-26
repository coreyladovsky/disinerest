const { db } = require("./index.js");

const createPin = (req, res, next) => {
  db
    .one(
      "INSERT INTO pins(title, description, user_id, board_id, link_url, image_url, original_poster_id) VALUES(${title}, ${description}, ${user_id}, ${board_id}, ${link_url}, ${image_url}, ${original_poster_id} ) RETURNING *",
      req.body
    )
    .then(pin => {
      res.status(200).json({
        pin,
        status: "success",
        message: "NEW PIN ADDED!"
      });
    })
    .catch(err => next(err));
};

const getPins = (req, res, next) => {
  db
    .any("SELECT * FROM pins ORDER BY created_at DESC")
    .then(pins => {
      res.status(200).json({
        pins,
        status: "success",
        message: "ALL PINS!"
      });
    })
    .catch(err => next(err));
};

const getPin = (req, res, next) => {
  db
    .one("SELECT pins.*, users.email as owner_email, users.image_url as owner_image FROM pins JOIN users ON users.id = pins.user_id WHERE pins.id = " + Number(req.params.id))
    .then(pin => {
      res.status(200).json({
        pin,
        status: "success",
        message: "PIN RETREIVED!"
      });
    })
    .catch(err => next(err));
};

const deletePin = (req, res, next) => {
  let pinId = parseInt(req.params.id);
  db
    .result("DELETE FROM pins WHERE id=$1", pinId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "DELETED PIN",
        result: result
      });
    })
    .catch(err => {
      return next(err);
    });
};

const updatePin = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ");

  db
    .one(
      "UPDATE pins SET " +
        queryString +
        " WHERE id=" +
        req.params.id +
        "RETURNING * ",
      req.body
    )
    .then(pin => {
      res.status(200).json({
        status: "success",
        message: "UPDATE PIN",
        pin
      });
    })
    .catch(err => {
      return next(err);
    });
};

const filterPins = (req, res, next) => {
  let query = req.body.query.toLowerCase();
  console.log("QUERY: ",req.body.query);
  db
    .any(
      `SELECT * FROM pins WHERE lower(title) LIKE '%${query}%' OR lower(description) LIKE '%${query}%'`
    ).then(pins => {
      res.status(200).json({
        status: "success",
        message: "FILTERED PINS!",
        pins
      });
    })
    .catch(err => next(err));
};

module.exports = {
  createPin,
  getPins,
  getPin,
  deletePin,
  updatePin,
  filterPins,
};
