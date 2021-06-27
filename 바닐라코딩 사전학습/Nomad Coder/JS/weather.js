const API_KEY = "766a577827340aea70487f4444532f7d";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        const temperature = Math.floor(data.main.temp);
        weather.innerText = `${data.weather[0].main} ${temperature}˚C`;
    });
}
function onGeoError() {
    alert("Cannot find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
