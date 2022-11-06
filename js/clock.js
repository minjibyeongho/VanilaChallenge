const clockArea = document.querySelector("#clock-area h1");

function clockFunc() {
    let now = new Date();
    let hour = String(now.getHours()).padStart(2,"0"); 
    let minute = String(now.getMinutes()).padStart(2,"0"); 
    let second = String(now.getSeconds()).padStart(2,"0");

    clockArea.innerText = `${hour}:${minute}:${second}`;
}

let now = new Date();
let hour = String(now.getHours()).padStart(2,"0"); 
let minute = String(now.getMinutes()).padStart(2,"0"); 
let second = String(now.getSeconds()).padStart(2,"0");

clockArea.innerText = `${hour}:${minute}:${second}`;

setInterval(clockFunc, 1000);

