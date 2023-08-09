const CategoryModel = require("../models/CategoryModel");
const ProductModel = require("../models/ProductModel");

let ProductController = {
  productHome: (request, response) => {
    response.render("dashboard");
  },
  getProductList: async (request, response) => {
    try {
      let result = await ProductModel.find();
      // response.send({
      //   result,
      // });
      response.render("product-list", {
        list: result,
      });
    } catch (error) {
      response.send({ error });
    }
  },
  getCategoryView: (request, response) => {
    response.render("category");
  },
  getCategoryEditView: async (request, response) => {
    let { id } = request.params;
    try {
      let result = await CategoryModel.findById(id);
      if (result) {
        response.render("category_edit", {
          id: id,
          name: result.name,
        });
      } else {
        response.redirect("/get-category-list");
      }
    } catch (error) {
      response.redirect("/get-category-list");
    }
  },
  removeCategory: async (request, response) => {
    let { id } = request.params;
    let found = await ProductModel.findOne({ category: id });
    if (found) {
      response.send({
        status: false,
        message:
          "You can't delete category as 1 or more product is assign to it.",
      });
    } else {
      await CategoryModel.deleteOne({ _id: id });
      response.send({
        status: true,
        message: "Category deleted successfully.",
      });
    }
  },
  saveCategory: async (request, response) => {
    let data = request.body;

    //save record
    let newCategory = new CategoryModel({
      name: data.name,
    });
    try {
      let isExist = await CategoryModel.findOne({
        name: { $regex: data.name, $options: "i" },
      });
      if (isExist) {
        response.send({
          status: false,
          message: "Giver Category is already added.",
        });
      } else {
        let result = await newCategory.save();
        if (result) {
          response.send({ status: true });
        } else {
          response.send({ status: false, message: "Unable to save Category " });
        }
      }
    } catch (error) {
      response.status(500).send({ status: false, error });
    }
  },
  updateCategory: async (request, response) => {
    let data = request.body;
    try {
      await CategoryModel.updateOne(
        { _id: data.id },
        { $set: { name: data.name } }
      );
      response.send({ status: true });
    } catch (error) {
      response.status(500).send({ status: false, error });
    }
  },
  getCategorys: async (request, response) => {
    let result = await CategoryModel.find();
    response.render("category_list", { list: result });
  },
  getAddProduct: async (request, response) => {
    let result = await CategoryModel.find();
    response.render("product", { categoryList: result });
  },
  saveProduct: async (request, response) => {
    let data = request.body;
    let file = request.file;

    // save data
    let newProduct = new ProductModel({
      title: data.p_name,
      price: data.p_price,
      description: data.p_desc,
      category: data.p_category,
      image: file.filename,
    });
    try {
      let result = await newProduct.save();
      response.send({ status: true, result });
    } catch (error) {
      response.status(500).send({ status: false, error });
    }
  },
};

module.exports = ProductController;
