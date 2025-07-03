const fs = require('fs');

setTimeout(() => {
    console.log("set timeout"); //this will run after 0 milliseconds after all the synchronous code has executed
},0);

setImmediate(() => {
    console.log("set immediate"); //this will run after all the synchronous code has executed
})

function someTask() {
    return new Promis((resolve,reject)=>{
        resolve("promise")
    })
}

someTask().then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
