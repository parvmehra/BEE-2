let file3 = require('./file3.js');

let res = file3.add(5,3);
console.log(res);

function sub(a,b) {
    return a-b;
}

    //module.exports is an object used to export functions
module.exports.sub = sub;  
