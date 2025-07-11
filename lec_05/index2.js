
let users = [
    {id: 1, name: "John", age: 20},
    {id: 2, name: "Jane", age: 17},
    {id: 3, name: "Doe", age: 19}
];

function isEligible (id) {
   return new Promise((resolve,reject)=>{
           let user = users.filter((user)=> user.id ==id)[0];
           console.log(user);
           if(user.age >=18){
            return resolve("User is eligible to vote");
           }
           else{
            return reject("User is not eligible to vote");
           }

    })
}

isEligible(2).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
console.log("hi");
console.log("bye");