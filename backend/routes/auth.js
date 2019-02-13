
var express = require('express');
var router = express.Router();
const passport = require('../auth/local');
const { loginRequired } = require("../auth/helpers");
const { registerUser, logoutUser, getUser } = require("../quieries/authQuieries.js");

router.post('/new', registerUser);
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
});
router.get('/logout', loginRequired, logoutUser);

router.get('/getUser', loginRequired, getUser);
// router.get('/getSingleUser/:username', db.getSingleUser);



module.exports = router;
