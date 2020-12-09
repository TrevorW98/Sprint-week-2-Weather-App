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
let cityInput = "stockton";
let save = document.getElementById("save");

let favoritesArr = [];
let LSList = document.getElementById("LSList");

let currentLocation = document.getElementById("currentLocation");
let currentTemp = document.getElementById("currentTemp");
let currentDayMorn = document.getElementById("currentDayMorn");
let currentDayNoon = document.getElementById("currentDayNoon");
let currentDayNight = document.getElementById("currentDayNight");
let currentDayDesc = document.getElementById("currentDayDesc");
let currentDate = document.getElementById("currentDate");

let day1AmTemp = document.getElementById("day1AmTemp");
let day1NoonTemp = document.getElementById("day1NoonTemp");
let day1PmTemp = document.getElementById("day1PmTemp");
let day1Desc = document.getElementById("day1Desc");
let day1Date = document.getElementById("day1Date");

let day2AmTemp = document.getElementById("day2AmTemp");
let day2NoonTemp = document.getElementById("day2NoonTemp");
let day2PmTemp = document.getElementById("day2PmTemp");
let day2Desc = document.getElementById("day2Desc");
let day2Date = document.getElementById("day2Date");

let day3AmTemp = document.getElementById("day3AmTemp");
let day3NoonTemp = document.getElementById("day3NoonTemp");
let day3PmTemp = document.getElementById("day3PmTemp");
let day3Desc = document.getElementById("day3Desc");
let day3Date = document.getElementById("day3Date");

let day4AmTemp = document.getElementById("day4AmTemp");
let day4NoonTemp = document.getElementById("day4NoonTemp");
let day4PmTemp = document.getElementById("day4PmTemp");
let day4Desc = document.getElementById("day4Desc");
let day4Date = document.getElementById("day4Date");

let day5AmTemp = document.getElementById("day5AmTemp");
let day5NoonTemp = document.getElementById("day5NoonTemp");
let day5PmTemp = document.getElementById("day5PmTemp");
let day5Desc = document.getElementById("day5Desc");
let day5Date = document.getElementById("day5Date");


function loadWeather(url,url5Day){
    // let cityInput = document.getElementById("cityInput").value;
    fetch(url).then(
        current => current.json()
    ).then (weatherData => {
        //console.log("This data is coming from the current weather API",weatherData);
        // console.log(weatherData.name);
        // console.log("This is the temp in Kelvin:",weatherData.main.temp);
        // //This converts kelvin to farenheit with no decimal places
        // console.log("This is the temp in Farenheit:",Math.floor(((weatherData.main.temp-273.15)*1.8)+32));
        // console.log("This is the main weather prediction for the current day:",weatherData.weather[0].main);
        // console.log("This is the wind speed:",weatherData.wind.speed);
        
        getLatLon(weatherData.coord.lat, weatherData.coord.lon);

        function getLatLon(lat, lon){
            let urlOneCall_pt1 = "https://api.openweathermap.org/data/2.5/onecall?";
            let latLon = "lat=" + lat + "&lon=" + lon;
            let urlOneCallFull = urlOneCall_pt1 + latLon + apikey;

            async function loadOneCall(url) {
                let oneCall = await fetch(url);
                let oneCallData = await oneCall.json();
                console.log(oneCallData);
            }

            loadOneCall(urlOneCallFull);
            
        }

        // getLatLon(weatherData.coord.lat, weatherData.coord.lon);
        
    })

    fetch(url5Day).then(
        current => current.json()
    ).then (weatherData => {
        console.log(weatherData);
        // console.log("This is the city being pulled from:", weatherData.city.name);
        // console.log(weatherData.list[6].dt_txt);
        // console.log("This data is from 6:00 pm on December 09, 2020")
        // console.log(weatherData.list[6].weather[0].description);
        // console.log("Temp:",Math.floor(((weatherData.list[6].main.temp-273.15)*1.8)+32));
    })

    
}

loadWeather(url_pt1 + cityInput + apikey, url5Day + cityInput + apikey);

async function searchCity(){
    cityInput = document.getElementById("cityInput").value;
    // cityArray.push(cityInput);
    loadWeather(url_pt1 + cityInput + apikey, url5Day + cityInput + apikey);
}

//calls the function to load the entered location
search.addEventListener("click",function(){
    searchCity();
})

//saves the location to local storage
function saveCityToLS(){
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
}

//saves the location to the array of saved locations
function addCityToFavorites(cityInput){
    favoritesArr.push(cityInput);
}

// function onLoad(){
//     let savedCity = JSON.parse(localStorage.getItem("favoritesList"));
//     console.log(savedCity);
//     if(savedCity)
// }

// onLoad();

// save.addEventListener("click", ()=>{
//     saveCityToLS(currentLocation.value);
//     LSList.innerText = currentLocation.value;
// })