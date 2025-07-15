const fs = require("fs");

fs.readFile("demo.txt", "utf-8", function(err,data){
    if(err) return console.log(err);

    fs.readFile("hello.txt", "utf-8", function(err,data2){
        if(err) return console.log(err);

        const data3 = data.trim() + "\n" + data2.trim();
        fs.writeFile("combined.txt", data3 , function(err){
            if(err) return console.log(err);
        });
    });
});