// let UserController = {
//   home: (request, response) => {
//     response.send("Hello");
//   },
//   about: (request, response) => {
//     response.send("This about page");
//   },
// };

module.exports.home = (request, response) => {
  // response.send("Hello");
  response.render("index");
};

module.exports.about = (request, response) => {
  response.send("This about page");
};

// module.exports = UserController;
