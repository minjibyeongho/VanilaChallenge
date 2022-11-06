const todo = document.querySelector("#todo");
const todoInput = document.querySelector("input");
const todos = document.querySelector("#todos");

let todoList = [];

function addTodo(e){
    e.preventDefault();
    console.log("Add");
    let newTodo = todoInput.value;
    todoList.push(newTodo);
    
    let liTag = document.createElement("li");
    liTag.innerText = newTodo;
    todos.appendChild(liTag);

}

todo.addEventListener("submit", addTodo);



