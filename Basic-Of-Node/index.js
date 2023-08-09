// Common js
// ES5 + ES6
let text = "3ri Tech";
console.log(text);

// window ==> GLobal Object
// document ==> DOM

console.group(globalThis);

//  modules can be imported
// es5 (common js)
const nameOfModule = require("nameOfModule");

// es6 (module JS)
import nameOfModule from "nameOfModule";

//  modules can be exported
// ES5 way
module.exports = nameOfModule;
/// Es6 Way
export default nameOfModule;
