let box = document.querySelector("#box");
let btn = document.querySelector("#btn");
let stop = document.querySelector("#btn2");
let id;
let colors = ["red","green","black","blue","yellow","orange","pink","purple","brown","aqua"];

function generateRandomColor() {
    let index = Math.floor(Math.random()*10);
    console.log(index);

    let randomColor= colors[index];
    console.log(randomColor);
    box.style.backgroundColor = randomColor;

}

btn.addEventListener("click", function() {
    id=setInterval(()=>{
        generateRandomColor();
    },500)
});

stop.addEventListener("click", function() {
    clearInterval(id);
    box.style.backgroundColor = "white";
});