const passport = require('passport');
let { db } = require("../quieries/index.js");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    db.one('SELECT * FROM users WHERE email=${email}', {email: email})
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err, null);
    });
  });
};
