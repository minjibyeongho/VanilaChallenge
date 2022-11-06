const clockArea = document.querySelector("#clock-area h3");

function clockFunc() {
    let now = new Date();
    let hour = String(now.getHours()).padStart(2,"0"); 
    let minute = String(now.getMinutes()).padStart(2,"0"); 
    let second = String(now.getSeconds()).padStart(2,"0");

    clockArea.innerText = `${hour}h:${minute}m:${second}s`;
}

let now = new Date();
let hour = String(now.getHours()).padStart(2,"0"); 
let minute = String(now.getMinutes()).padStart(2,"0"); 
let second = String(now.getSeconds()).padStart(2,"0");

clockArea.innerText = `${hour}h:${minute}m:${second}s`;

setInterval(clockFunc, 1000);

