const fs = require("fs");

fs.writeFile("../demo.txt","Hello World!!",function(err,data){
    if(err) return console.log(err);
    console.log("File created successfully");
})