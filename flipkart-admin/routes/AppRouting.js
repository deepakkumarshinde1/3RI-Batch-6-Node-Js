const OuthController = require("../controller/OuthController");
const ProductController = require("../controller/ProductController");
const { upload } = require("./FileUploadMiddleware");
const { checkIsLogin, dummyLogin } = require("./middleware");
const validation = require("./validation");

const AppRouting = require("express").Router();

AppRouting.get("/", dummyLogin, ProductController.productHome);
AppRouting.get(
  "/get-product-list",
  dummyLogin,
  ProductController.getProductList
);
AppRouting.get("/add-category", ProductController.getCategoryView);
AppRouting.get("/login", OuthController.loginView);
AppRouting.get("/add-product", ProductController.getAddProduct);
AppRouting.get("/get-category-list", ProductController.getCategorys);
AppRouting.get("/edit-category/:id", ProductController.getCategoryEditView);
// all api
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

module.exports = AppRouting;
