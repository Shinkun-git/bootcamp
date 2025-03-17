const fs = require("fs");

console.log("Before Reading")

const contents = fs.readFileSync('readMe.txt', 'utf8');
console.log(contents);

console.log("After Reading")
