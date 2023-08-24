const UserModel = require("../models/UserModel");
let jwt = require("jsonwebtoken");
const SECRET = "TYSR";

module.exports.login = async (request, response) => {
  try {
    let { email, password } = request.body;
    let result = await UserModel.findOne(
      {
        email: { $regex: email, $options: "i" },
        password: password,
      },
      { password: 0 }
    );
    if (result === null) {
      response.send({
        status: false,
        message: "Username or Password is wrong",
      });
    } else {
      let payload = {
        email: result.email,
        name: result.name,
        mobile: result.mobile,
      };
      let token = jwt.sign(payload, SECRET);
      console.log(token);
      response.send({
        status: true,
        token,
      });
    }
  } catch (error) {
    response.send({
      status: false,
      error,
    });
  }
};

module.exports.createAccount = async (request, response) => {
  let data = request.body;
  try {
    let result = await UserModel.findOne({
      email: { $regex: data.email, $options: "i" },
    });
    if (result === null) {
      let newUser = new UserModel({
        email: data.email,
        name: data.name,
        password: data.password,
        mobile: data.mobile,
      });
      await newUser.save();
      response.send({
        status: true,
        message: "Your Account has been created successfully",
      });
    } else {
      response.send({
        status: false,
        message: "This email id already exists, try other.",
      });
    }
  } catch (error) {
    response.send({
      status: false,
      error,
    });
  }
};
