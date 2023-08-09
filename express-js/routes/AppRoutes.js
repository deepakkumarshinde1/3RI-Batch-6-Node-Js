// extract routes
const AppRoutes = require("express").Router();
const UserController = require("../controller/UserController");

AppRoutes.get("/", UserController.home);

AppRoutes.get("/about", UserController.about);

module.exports = AppRoutes;
