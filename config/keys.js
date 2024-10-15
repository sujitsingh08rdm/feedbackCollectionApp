//in keys js we need ot figure out what set of keys to use

if (process.env.NODE_ENV === "production") {
  // we are in production env
  module.exports = require("./prod.js");
} else {
  // we are in dev env
  module.exports = require("./dev.js");
}
