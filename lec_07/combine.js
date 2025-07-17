const fs = require("fs");
const read = require("./IO/io").read;
const write = require("./IO/io").write;

// fs.readFile("users.txt", "utf-8", function(err,data){
//     if(err) return console.log(err);
//     let users = JSON.parse(data);

//     fs.readFile("users2.txt", "utf-8", function(err,data2){
//         if(err) return console.log(err);
//         let users2 = JSON.parse(data2)

//         const combined = users.concat(users2);
//         fs.writeFile("combined.txt", JSON.stringify(combined,null,2), function(err){
//             if(err) return console.log(err);
//         });
//     });
// });

async function combineUsers(file1, file2, file3) {
    let user1 = await read(file1);
    let user2 = await read(file2);
    let combined = user1.concat(user2);
    await write(file3, JSON.stringify(combined,null,2));
}

combineUsers("users.txt", "users2.txt", "task.txt");