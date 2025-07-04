let file3 = require('./file3.js'); //importing the module file1.js

let res = file3.multiply(5,3);
console.log(res);

function divide(a,b) {
    return a/b;
}


module.exports.divide = divide;