//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let url_pt1 = "http://api.openweathermap.org/data/2.5/weather?q=";
let cityInput = document.getElementById("cityInput");
let apikey = "&appid=3bdbeade6189c91354f9f969824f70b6";

let weatherData = [];

function loadWeather(url){
    fetch(url).then(
        response => response.json()
    ).then (data => {
        console.log(data);
        //This is where you fetch your data
        console.log(data.name);
        //pulls the name of the city
        // console.log(data.main.feels_like)
        weatherData.push(data.main.feels_like);
        weatherData.push(data.main.humidity);
        weatherData.push(data.main.pressure);
        weatherData.push(data.main.temp);
        weatherData.push(data.main.temp_max);
        weatherData.push(data.main.temp_min);
        //console.log(feels_like);
    })
}

// call the function
loadWeather(url_pt1+city+apikey);

function showFeels(){
    console.log(weatherData);
}

showFeels();