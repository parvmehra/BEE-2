const fs = require('fs');
const{ read } = require('./IO/io.js');
const{ write } = require('./IO/io.js');


// fs.readFile('../users.txt',"utf-8", function(err, data) {
//     if(err) return console.log(err);
//     let users = JSON.parse(data);
//     console.log(users[0]);
// });




async function readuser(){
    let users = await read("./users.txt");
    let users2 = await read("./users2.txt");
    let allusers=users.concat(users2);
    write("./allusers.txt",allusers);

}
readuser()