// import ==> http
const http = require("http");
const files = require("./files");

// 5 function
// general function
// function expression
// callback function
// IIFE
//  arrow function

// create a server
// server <==== request === client
// server ====response == client[]

let server = http.createServer((request, response) => {
  if (request.url !== "/favicon.ico") {
    console.log(request.url);
    switch (request.url) {
      case "/":
        response.write(files.getFileData("index"));

        break;
      case "/about":
        response.write(files.getFileData("about"));

        break;
      case "/project":
        response.write(files.getFileData("project"));

        break;
      default:
        response.write("page not found");
        break;
    }
    response.end();
  }
});

// add port nuWmber to a server
server.listen(3031, () => {
  console.log("SERVER IS RUNNING ON PORT ", 3031);
});
