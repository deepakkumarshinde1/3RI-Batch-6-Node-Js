const mongoose = require("mongoose");

// virtual schema

const CategorySchema = new mongoose.Schema({
  name: { type: String },
});
// model instance
const CategoryModel = mongoose.model("category", CategorySchema, "categorys"); // name , SchemaName , collectionName
module.exports = CategoryModel;
