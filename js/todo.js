const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todos = document.querySelector("#todo-list");

let todoList = [];

const TODOS_KEY = "todos";

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    todoList = todoList.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
    li.remove();
}

function paintTodo(newTodoObj) {
    const liTag = document.createElement("ol");
    const spanTag = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X"; // &#x274C;
    button.addEventListener("click", deleteTodo);
    spanTag.innerText = newTodoObj.text;
    liTag.id = newTodoObj.id;
    liTag.appendChild(spanTag);
    liTag.appendChild(button);
    todos.appendChild(liTag);
}

function addTodo(e) {
    e.preventDefault();
    console.log("Add");
    let newTodoObj = {
        text:todoInput.value,
        id: Date.now()
    }
    todoInput.value = "";
    todoList.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", addTodo);

// function loadTodos(ele){
//     paintTodo(ele);
// }

const saveTodoList = localStorage.getItem(TODOS_KEY);
if( saveTodoList !== null ){
    const parsedTodos = JSON.parse(saveTodoList);
    todoList = parsedTodos;
    parsedTodos.forEach(paintTodo);
}


