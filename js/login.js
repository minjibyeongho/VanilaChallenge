const LoginForm = document.querySelector("#login-form");
const LoginFormInput = LoginForm.querySelector("input");
const LoginUser = document.querySelector("#login-user");


const HIDDEN_CLASS_NAME = "hidden";
const USER_KEY = "userName";

function login(e){
    e.preventDefault();
    let userName = LoginFormInput.value;
    console.log(userName);
    localStorage.setItem(USER_KEY,userName);
    LoginUser.classList.remove(HIDDEN_CLASS_NAME);
    LoginUser.innerText = userName;
    LoginForm.classList.add(HIDDEN_CLASS_NAME);
}

LoginForm.addEventListener("submit", login);

const userName = localStorage.getItem(USER_KEY);
if( userName !== null ){
    LoginUser.classList.remove(HIDDEN_CLASS_NAME);
    LoginUser.innerText = `Hello! ${userName}`;
    LoginForm.classList.add(HIDDEN_CLASS_NAME);
}