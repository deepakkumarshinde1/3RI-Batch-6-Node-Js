const http = require("http");
const server = http.createServer((request, response) => {
  response.write("Hello 123");
  response.end();
});

server.listen(3001, () => {
  console.log("server running on port ", 3001);
});
