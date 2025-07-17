const fs = require('fs');

let users = [
    {
        id : 3,
        name: "Harry Potter",
        age : 21,
    },
    {
        id : 2,
        name: "Mary Jane",
        age : 26,
    }
];


fs.writeFile("../users2.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users written");
})
