const mongoose = require("mongoose");
const { Schema } = mongoose;

// create a schema for user
const userSchema = new Schema({
  gooogleId: String,
});

//create a model for userSchmema
mongoose.model("users", userSchema);
