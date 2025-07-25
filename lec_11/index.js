//accessing element/node
//1. using id
let res = document.getElementById("mydiv");
//console.log(res);
console.dir(res);


//2. using class
let h2 = document.getElementsByClassName("h2");
console.log(h2);   //will return the collection
console.log(h2[0]); //will return specific element 

//3. tag name
let res2 = document.getElementsByTagName("p");
console.log(res2);

//4. query selector
let out = document.querySelector("#mydiv");   //# is used to specify that we are using an id adn . is used for class 
console.log(out);
let out2 = document.querySelectorAll("p");
console.log(out2);  //(use index number to select specific elements)



//document properties 
//1. accessing element content and changing it 
//* innnerHTML
console.log(res.innerHTML);   //GETTER
// res.innerHTML = '<p>this is the changed content</p>'   //setter 


//* innerText
console.log(res.innerText);  //getter
res.innerText=  'hello world'  //we can only use strings here(setter)


//* textContent 


//accessing element class or id or etc 
//1. getAttribute
console.log(res.getAttribute("id"))
// res.setAttribute("class","usingjs");  //setter 


//2. only for class attribute
//* classList
let myH = document.querySelector(".h2");
console.log(myH.classList);
myH.classList.add("hi");
myH.classList.remove("h2");
let btn = document.querySelector(".btn")
let form = document.querySelector(".signup");
btn.addEventListener("click",()=>{
    form.classList.toggle("hide");
})


