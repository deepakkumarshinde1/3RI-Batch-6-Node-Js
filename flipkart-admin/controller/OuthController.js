const OuthModel = require("../models/OuthModel");

const OuthController = {
  loginView: (request, response) => {
    if (request.session.isLogin) {
      response.redirect("/");
    } else {
      response.render("login", {
        logout: true,
      });
    }
  },
  checkLogin: async (request, response) => {
    let data = request.body;

    let result = await OuthModel.findOne({
      username: data.username,
      password: data.password,
    });

    if (result !== null) {
      request.session.isLogin = true;
      response.status(200).send({
        status: true,
      });
    } else {
      delete request.session.isLogin;
      response.status(200).send({
        status: false,
      });
    }
  },
  logout: (request, response) => {
    delete request.session.isLogin;
    response.redirect("/login");
  },
};

module.exports = OuthController;
