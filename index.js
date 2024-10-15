//importing all libs needed
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

//we are using require since it get executed simply on startup, and thats what we actually wanted
require("./models/user");
//we are using require since it get executed simply on startup, and thats what we actually wanted
require("./services.js/passport");

//connecting monggose with mongoDB
mongoose.connect(keys.mongoURI);

//creating a express app
const app = express();

//Setting up our cookie session
app.use(
  cookieSession({
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

//we are using only require since we are returning a function from authRoute that will be siply called using (app)
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
//creating a express server on port 5000, tells node to listen to port 5000

app.listen(PORT);
