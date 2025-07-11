
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
        reject("product is not available",null);
    }
    else{
        resolve(null, isproduct.price);
    }
})
}
