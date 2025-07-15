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

function buyProduct(product_name) {

    return new Promise((resolve, reject) => {
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
       return  reject("product is not available");
    }
    else{
       return  resolve(isproduct.price);
    }
})
}


function decuctAmount(amount){
    return new Promise((resolve, reject) => {
        if(account_balance < amount){
            return reject("insufficient balance");
        }
        account_balance -= amount;
        return resolve("product purchase successfully");
    })
}uuz

buyProduct("Iphone 15").then((data)=>{
    return decuctAmount(data);
})
.then((message)=>{
    console.log(message);
    console.log("remaining balance is: " + account_balance);
})
.catch((err)=>{
    console.log(err);
})

