const mongoose = require("mongoose");

// virtual schema
const RatingSchema = new mongoose.Schema({
  rate: { type: Number, default: 0 },
  count: { type: Number, default: 0 },
});
let ObjectId = mongoose.Schema.Types.ObjectId;

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: ObjectId, required: true },
  image: { type: String, required: true },
  rating: RatingSchema,
});
// model instance
const ProductModel = mongoose.model("product", ProductSchema, "products"); // name , SchemaName , collectionName
module.exports = ProductModel;
