const OuthController = require("../controller/OuthController");
const ProductController = require("../controller/ProductController");
const UserController = require("../controller/UserController");
const { upload } = require("./FileUploadMiddleware");
const { checkIsLogin, dummyLogin } = require("./middleware");
const validation = require("./validation");

const AppRouting = require("express").Router();

AppRouting.get("/", checkIsLogin, ProductController.productHome);
AppRouting.get(
  "/get-product-list",
  checkIsLogin,
  ProductController.getProductList
);
AppRouting.get(
  "/add-category",
  checkIsLogin,
  ProductController.getCategoryView
);
AppRouting.get("/login", OuthController.loginView);
AppRouting.get("/add-product", checkIsLogin, ProductController.getAddProduct);
AppRouting.get(
  "/get-category-list",
  checkIsLogin,
  ProductController.getCategories
);
AppRouting.get(
  "/edit-category/:id",
  checkIsLogin,
  ProductController.getCategoryEditView
);

AppRouting.get("/logout", OuthController.logout);
// all api
// react api

AppRouting.get("/api/get-category-list", ProductController.apiGetCategories);
// react api close

AppRouting.post("/api/check-login", OuthController.checkLogin);
AppRouting.post(
  "/api/save-new-category",
  validation.vSaveCategory,
  ProductController.saveCategory
);
AppRouting.post(
  "/api/save-product",
  upload.single("p_image"),
  ProductController.saveProduct
);
AppRouting.delete("/api/remove-category/:id", ProductController.removeCategory);

AppRouting.put(
  "/api/update-category",
  validation.vUpdateCategory,
  ProductController.updateCategory
);

AppRouting.post("/api/client/registration", UserController.createAccount);

AppRouting.post("/api/client/login", UserController.login);

module.exports = AppRouting;
