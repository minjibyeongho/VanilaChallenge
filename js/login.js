const LoginForm = document.querySelector("#login-form");
const LoginFormInput = LoginForm.querySelector("input");

function login(e){
    e.preventDefualt();
    console.log("login");
}

LoginForm.addEventListener("submit", login);