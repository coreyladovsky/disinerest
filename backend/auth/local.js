const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");
const { db }= require("../quieries/index");
const options = {usernameField: "email"};

init();
passport.use(
  new localStrategy(options, (email, password, done) => {
    db.any("SELECT * FROM users WHERE email = $1", [email])
      .then(rows => {
        const user = rows[0];
        if (!user) {
          return done(null, false);
        }
        if (!helpers.comparePasswords(password, user.password_digest)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        console.log(`login err     `, err);
        return done(err);
      });
  })
);


module.exports = passport;
