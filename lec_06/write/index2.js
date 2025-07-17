const fs = require("fs");

fs.writeFile("../hello.txt","This is a sample file",function(err,data){
    if(err) return console.log(err);
    console.log("File created successfully");
})

