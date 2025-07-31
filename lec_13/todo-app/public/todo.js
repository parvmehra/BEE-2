let todoInput = document.querySelector('.todoinput');
let todocontainer = document.querySelector('.todo-list');
let todoform = document.querySelector('.todo-form');

let todoArray = [];

fetch('http://localhost:3333/todos')
    .then(response => response.json())  
    .then(data => {
        todoArray = data;   
        showAllTodos(todoArray);
    })
    .catch(error => console.error('Error fetching todos:', error));

todoform.addEventListener('submit', function(event) {
    event.preventDefault();
    let value = inputValue();
    if (value.trim() === '') return; // prevent empty todos

    let newTodo = {
        id: Math.floor(Math.random() * 10000),
        title: value
    };

    todoArray.push(newTodo);
    createTodoELement(newTodo);
    todoInput.value = ''; 
});

function inputValue() {
    return todoInput.value;
}

function createTodoELement(todo) {
    let li = document.createElement("li");
    li.setAttribute("id", `${todo.id}`);
    li.innerHTML = `<div>
                <input type="checkbox" name="" id="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class="edit">edit</button>
                    <button class="delete">delete</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>`;
    todocontainer.appendChild(li);
}

function showAllTodos(todoArray) {
    todoArray.forEach(todo => {
        createTodoELement(todo);
    });
}

//new todo to server 
//post request using fetch
//save data to server 