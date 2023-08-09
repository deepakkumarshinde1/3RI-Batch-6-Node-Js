const fs = require("fs");
// if i want to read file
// we need fs module
function getFileData(fName) {
  let path = "./public/" + fName + ".html";
  let data = fs.readFileSync(path);
  return data;
}

// export object / individual
module.exports = { getFileData };
