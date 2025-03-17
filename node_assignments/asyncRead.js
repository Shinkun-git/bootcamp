const fs = require('fs')

console.log("Before Reading")

const contents = fs.readFile('readME.txt','utf8', (err, contents)=>{
    console.log(contents);
})

console.log("After Reading")
