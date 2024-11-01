const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

// notice here we giving one argument, one argument mean we are importing
const User = mongoose.model("users");

//serialize: Decides what part of the user object to store in the session. In this case, only the database user ID (user.id) is stored,
passport.serializeUser((user, done) => {
  done(null, user); // here user.id is not profile id, its it the user id that is store in DB, not the google user iD
});

passport.deserializeUser((id, done) => {
  //The deserializeUser function is used to retrieve the full user object from the database using the id stored in the session.
  User.findById(id).then((user) => {
    done(null, user);
  });
});

//this registers a new google auth strategy with passport
passport.use(
  //created a instace of googleStrategy, for authenticating with google
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", // url that gets callbacked once user authenticated
      // proxy: true,
    },

    //these are callback fn that are executed when auth was sucessfull
    (accessToken, refreshToken, profile, done) => {
      // Check if user already exists in the database
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // if we aleady have record with profile ID
          done(null, "existing");
        } else {
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user)); // we to save method to save this model instance to DB
        }
      });
    }
  )
);
