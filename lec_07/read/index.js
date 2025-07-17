const fs = require('fs');

fs.readFile('../users.txt',"utf-8", function(err, data) {
    if(err) return console.log(err);
    let users = JSON.parse(data);
    console.log(users[0]);
});