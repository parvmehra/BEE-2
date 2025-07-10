let account_balance = 200000;
let products = [
    {
        name : "Samsung",
        price : 70000,
        quantity : 10
    },
    {
        name : "Iphone 15",
        price : 120000,
        quantity : 1
    }
]


// function buyProduct(product_name, cb) {
//     // some asynchronous operation
//     // 1. get product detail from db 
//     // 2. write order detail and user detail
//     setTimeout(() => {
//         console.log("order complete");
//         cb();    //calling the callback function 

//     })
// }



buyProduct("Iphone 15",function(err,amount){
    //console.log("product is purchased");
    // this is the callback function
    // it will be executed after the buyProduct function is completed

    if(err) return console.log(err);
    console.log(amount);

    decuctAmount(amount, function(err, msg){
        if(err) return console.log(err);
        console.log(msg);
        console.log("product is purchased");
    });
})


// console.log("product is purchased");     this was running before the function


function buyProduct(product_name, cb) {
    let isproduct = null;

    //implement for loop to find the product in an array 
    //find product object from products array whose name is equal to product_name

    for( let i = 0; i < products.length; i++) {
       if(products[i].name == product_name){
        isproduct = products[i];
        break; 
       }
    }

    if(!isproduct){
        cb("product is not available",null);
    }
    else{
        cb(null, isproduct.price);
    }
}




function decuctAmount(amount, cb){
    // some asynchronous operation
    // 1. check if account balance is sufficient
    // 2. deduct amount from account balance        
    setTimeout(() => {
        if(account_balance < amount){
            cb("insufficient balance", null);
        }
        else{
            account_balance -= amount;
            cb(null, "amount deducted successfully");
        }

}, 1000);
}