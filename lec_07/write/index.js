const fs = require('fs');

let users = [
    {
        id : 1,
        name: "John Doe",
        age : 30,
    },
    {
        id : 2,
        name: "Jane Smith",
        age : 25,
    }
];


fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users written");
})
