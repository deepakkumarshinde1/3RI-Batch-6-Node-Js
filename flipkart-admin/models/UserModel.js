const mongoose = require("mongoose");

// virtual schema

const UserSchema = new mongoose.Schema({
  email: { type: String },
  name: { type: String },
  password: { type: String },
  mobile: { type: String },
});
// model instance
const UserModel = mongoose.model("user", UserSchema, "users"); // name , SchemaName , collectionName
module.exports = UserModel;
