//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let url_pt1 = "http://api.openweathermap.org/data/2.5/weather?q=";
let url5Day = "http://api.openweathermap.org/data/2.5/forecast?q=";
let cityInput = "stockton";
let apikey = "&appid=3bdbeade6189c91354f9f969824f70b6";


function loadWeather(url,url5Day){
    // let cityInput = document.getElementById("cityInput").value;
    fetch(url).then(
        current => current.json()
    ).then (weatherData => {
        console.log(weatherData);
        console.log(weatherData.name);
        console.log(weatherData.main.temp);
        //This converts kelvin to farenheit with no decimal places
        console.log(Math.floor(((weatherData.main.temp-273.15)*1.8)+32));
     
    })

    fetch(url5Day).then(
        current => current.json()
    ).then (weatherData => {
         console.log(weatherData);
    
    })
}

// call the function
loadWeather(url_pt1+cityInput+apikey, url5Day + cityInput + apikey);

function citySearch(){
    let cityInput = document.getElementById("cityInput").value;
}