const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const init = require('./passport');
const helpers = require('./helpers');
let { db } = require("../quieries/index.js");

init();

passport.use(
  new localStrategy({}, (email, password, done) => {
    db.one("SELECT * FROM users WHERE email = $1", email)
      .then(user => {
        console.log(user);
        if(!user) {
          return done(null, false);
        }
        if(!helpers.comparePasswords(password, user.password_digest)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => done(err));
  })
);

module.exports = passport;
