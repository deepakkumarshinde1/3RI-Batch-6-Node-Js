const mongoose = require("mongoose");

// virtual schema

const OuthSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
});
// model instance
const OuthModel = mongoose.model("outh", OuthSchema, "ouths"); // name , SchemaName , collectionName
module.exports = OuthModel;
