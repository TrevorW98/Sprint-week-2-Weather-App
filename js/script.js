// Trevor Womack
// 12/08/2020
// Sprint Week 2 Day 2
// This code is the front end development of the prototype created by Adrian Segura.
// on this page, you can type in a city in the search bar, push search, and data for that city 
// will populate the console. 



//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let url_pt1 = "http://api.openweathermap.org/data/2.5/weather?q=";
let url5Day = "http://api.openweathermap.org/data/2.5/forecast?q=";
// let cityInput = "stockton";
let apikey = "&appid=3bdbeade6189c91354f9f969824f70b6";
let search = document.getElementById("search");
// let cityArray = [];

function loadWeather(url,url5Day){
    // let cityInput = document.getElementById("cityInput").value;
    fetch(url).then(
        current => current.json()
    ).then (weatherData => {
        console.log("This data is coming from the current weather API",weatherData);
        console.log(weatherData.name);
        console.log("This is the temp in Kelvin:",weatherData.main.temp);
        //This converts kelvin to farenheit with no decimal places
        console.log("This is the temp in Farenheit:",Math.floor(((weatherData.main.temp-273.15)*1.8)+32));
        console.log("This is the main weather prediction for the current day:",weatherData.weather[0].main);
        console.log("This is the wind speed:",weatherData.wind.speed);

    })

    fetch(url5Day).then(
        current => current.json()
    ).then (weatherData => {
        console.log("This data is coming from the 5-day forcast API",weatherData);
        console.log("This is the city being pulled from:", weatherData.city.name);
        console.log(weatherData.list[6].dt_txt);
        console.log("This data is from 6:00 pm on December 09, 2020")
        console.log(weatherData.list[6].weather[0].description);
        console.log("Temp:",Math.floor(((weatherData.list[6].main.temp-273.15)*1.8)+32));
    })
}

// call the function
// loadWeather(url_pt1 + cityArray[0] + apikey, url5Day + cityArray[0] + apikey);

function searchCity(){
    let cityInput = document.getElementById("cityInput").value;
    // cityArray.push(cityInput);
    loadWeather(url_pt1 + cityInput + apikey, url5Day + cityInput + apikey);
}

search.addEventListener("click",function(){
    searchCity();
})