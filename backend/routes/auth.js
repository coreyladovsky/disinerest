var express = require("express");
var router = express.Router();
const {
  registerUser,
  logoutUser,
  getUser,
  getSingleUser
} = require("../quieries/authQuieries.js");
const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

router.post("/new", registerUser);
router.post("/login", passport.authenticate("local"), (req, res) =>
  res.json(req.user)
);
router.get('/logout', loginRequired, logoutUser);
router.get('/getUser', loginRequired, getUser);
router.get('/getSingleUser/:email', getSingleUser)

module.exports = router;
