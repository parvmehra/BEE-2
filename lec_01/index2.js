//node js architecture \

const fs = require('fs');
console.log(fs);
console.log("start");

setTimeout(() => {
    console.log("set timeout"); //this will run after 0 milliseconds after all the synchronous code has executed
},0);

setImmediate(() => {
    console.log("set immediate"); //this will run after all the synchronous code has executed
})
 
fs.readFile('hello.txt', (data) => {
    console.log("file read");
    setTimeout(()=> {
        console.log("timer 2");
    },0)

    setImmediate(()=>{
        console.log("immediate 2");
    })
})

function someTask() {
    return new Promise((resolve,reject)=>{
        resolve("promise")   //create a promise that resolves with "promise"
    })
}

someTask().then((data) => {
    console.log(data);    //this will run after the promise is resolved
})
.catch((err) => {
    console.log(err);
})

process.nextTick(() => {
    console.log("next tick"); //higher priority than promise and will run before the promise
});
console.log("end");