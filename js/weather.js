console.log("weather javascript file")
const API_KEY = "b1761ba601576dea42de0866b3d52815";

function onGeoOk(position){
    console.log(position);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    //console.log("your location", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.name, data.weather[0].main);
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        console.log(city);
        console.log(weather);
        city.innerText = data.name;
        weather.innerText = `Weather: ${data.weather[0].main} / Temp: ${data.main.temp}`
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// 