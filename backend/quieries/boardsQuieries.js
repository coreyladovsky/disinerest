const { db } = require("./index.js");


const createBoard = (req, res, next) => {
  db
    .one(
      "INSERT INTO boards(title, description, user_id, category) VALUES(${title}, ${description}, ${user_id}, ${category}) RETURNING *",
      req.body
    )
    .then(board => {
      res.status(200).json({
        newBoard: board,
        status: "success",
        message: "NEW USER ADDED!"
      });
    })
    .catch(err => next(err));
};

const getBoard = (req, res, next) => {
  db
    .one("SELECT * FROM boards WHERE id = " + Number(req.params.id))
    .then(board => {
      res.status(200).json({
        board,
        status: "success",
        message: "USER RETREIVED!"
      });
    })
    .catch(err => next(err));
};


const getBoardPins = (req, res, next) => {
  db
    .any("SELECT * FROM pins WHERE board_id = " + Number(req.params.id))
    .then(pins => {
      res.status(200).json({
        pins,
        status: "success",
        message: "RETREIVED BOARDS PINS"
      });
    })
    .catch(err => next(err));
};

const deleteBoard = (req, res, next) => {
  let boardId = parseInt(req.params.id);
  db
    .result("DELETE FROM boards WHERE id=$1", boardId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "DELETED BOARD",
        result: result
      });
    })
    .catch(err => {
      return next(err);
    });
};


const updateBoard = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ");


  db
    .one(
      "UPDATE boards SET " + queryString + " WHERE id=" + req.params.id + "RETURNING * ",
      req.body
    )
    .then((board) => {
      res.status(200).json({
        status: "success",
        message: "UPDATE BOARD",
        board
      });
    })
    .catch(err => {
      return next(err);
    });
};


module.exports = { createBoard, getBoard, getBoardPins, deleteBoard, updateBoard };
