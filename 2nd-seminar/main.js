const sum = require("./sum");
const calculator = require("./calculator");

const result = sum(1, 3);
console.log("sum: ", result);

console.log("add: ", calculator.add(1, 3));
console.log("subtract: ", calculator.subtract(1, 3));
console.log("multiply: ", calculator.multiply(1, 3));
console.log("divide: ", calculator.divide(1, 3));
