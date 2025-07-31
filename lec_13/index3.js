//how to insert new elements in the DOM
//1. create a new element ---> createElement
//2. add required data to that element ---> innerHTML,innerText
//3. add that element in parent container ---> apendChild,append 
let todos = [{
    id : 1234,
    title : "Learn JavaScript",
},
{
    id : 1235,
    title : "Learn React",
}
]
let ul = document.querySelector(".list");
function createTodoELement(todo) {
    let li = document.createElement("li");
    li.setAttribute("id",`${todo.id}`);
    li.innerHTML = `<div>
                <input type="checkbox" name="" id="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class="edit">edit</button>
                    <button class="delete">delete</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci aperiam, eaque est officiis facilis voluptas alias iusto quam nihil tenetur porro. Veritatis beatae vitae dolore consectetur! Soluta, officia provident.</p>
                </div>
            </div>`
            ul.appendChild(li)
}

function showAllTodos(todos) {
   todos.forEach(todo=>{
    createTodoELement(todo);
   })
}

showAllTodos(todos);