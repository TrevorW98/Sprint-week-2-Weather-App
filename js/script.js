// Trevor Womack
// 12/08/2020
// Sprint Week 2 Day 2
// This code is the front end development of the prototype created by Adrian Segura.
// on this page, you can type in a city in the search bar, push search, and data for that city 
// will populate the console. 



//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let url_pt1 = "http://api.openweathermap.org/data/2.5/weather?q=";
let url5Day = "http://api.openweathermap.org/data/2.5/forecast?q=";
let apikey = "&appid=3bdbeade6189c91354f9f969824f70b6";
let imperial = "&units=imperial";

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
let currentIcon = document.getElementById("currentIcon");

let day1AmTemp = document.getElementById("day1AmTemp");
let day1NoonTemp = document.getElementById("day1NoonTemp");
let day1PmTemp = document.getElementById("day1PmTemp");
let day1Desc = document.getElementById("day1Desc");
let day1Date = document.getElementById("day1Date");
let day1Icon = document.getElementById("day1Icon");

let day2AmTemp = document.getElementById("day2AmTemp");
let day2NoonTemp = document.getElementById("day2NoonTemp");
let day2PmTemp = document.getElementById("day2PmTemp");
let day2Desc = document.getElementById("day2Desc");
let day2Date = document.getElementById("day2Date");
let day2Icon = document.getElementById("day2Icon");

let day3AmTemp = document.getElementById("day3AmTemp");
let day3NoonTemp = document.getElementById("day3NoonTemp");
let day3PmTemp = document.getElementById("day3PmTemp");
let day3Desc = document.getElementById("day3Desc");
let day3Date = document.getElementById("day3Date");
let day3Icon = document.getElementById("day3Icon");

let day4AmTemp = document.getElementById("day4AmTemp");
let day4NoonTemp = document.getElementById("day4NoonTemp");
let day4PmTemp = document.getElementById("day4PmTemp");
let day4Desc = document.getElementById("day4Desc");
let day4Date = document.getElementById("day4Date");
let day4Icon = document.getElementById("day4Icon");

let day5AmTemp = document.getElementById("day5AmTemp");
let day5NoonTemp = document.getElementById("day5NoonTemp");
let day5PmTemp = document.getElementById("day5PmTemp");
let day5Desc = document.getElementById("day5Desc");
let day5Date = document.getElementById("day5Date");
let day5Icon = document.getElementById("day5Icon");

loadWeather(url_pt1 + cityInput + imperial + apikey, url5Day + cityInput + imperial + apikey);



function loadWeather(url, url5Day) {
    let cityInput = document.getElementById("cityInput").value;
    fetch(url).then(
        current => current.json()
    ).then(weatherData => {
        console.log("This data is coming from the current weather API", weatherData);
        getLatLon(weatherData.coord.lat, weatherData.coord.lon);
        currentLocation.innerText = weatherData.name + ", " + weatherData.sys.country;
    });

    // fetch(url5Day).then(
    //     current => current.json()
    // ).then(weatherData => {
    //     console.log("This data is coming from the 5 day forecast", weatherData);
    //     getLatLon(weatherData.city.coord.lat, weatherData.city.coord.lon);
    // });
}



//This function calls the OneCal API with the coordinates from the first pull
function getLatLon(lat, lon) {
    let urlOneCall_pt1 = "https://api.openweathermap.org/data/2.5/onecall?";
    let latLon = "lat=" + lat + "&lon=" + lon;
    let properUnit = "&units=imperial";
    
    loadOneCall(urlOneCall_pt1 + latLon + properUnit + apikey);

    async function loadOneCall(url) {
        let oneCall = await fetch(url);
        let oneCallData = await oneCall.json();
        console.log(oneCallData);
        currentTemp.innerText = oneCallData.current.temp;
        currentDayMorn.innerText = oneCallData.daily[0].temp.morn;
        currentDayNoon.innerText = oneCallData.daily[0].temp.eve;
        currentDayNight.innerText = oneCallData.daily[0].temp.night;
        currentDayDesc.innerText = oneCallData.current.weather[0].main;
        //currentIcon.innerText = weatherData.current.weather[0].icon;
        //figure out how to do icons and date conversions
        day1AmTemp.innerText = oneCallData.daily[1].temp.morn;
        day1NoonTemp.innerText = oneCallData.daily[1].temp.eve;
        day1PmTemp.innerText = oneCallData.daily[1].temp.night;
        day1Desc.innerText = oneCallData.daily[1].weather[0].main;
    
        day2AmTemp.innerText = oneCallData.daily[2].temp.morn;
        day2NoonTemp.innerText = oneCallData.daily[2].temp.eve;
        day2PmTemp.innerText = oneCallData.daily[2].temp.night;
        day2Desc.innerText = oneCallData.daily[2].weather[0].main;
    
        day3AmTemp.innerText = oneCallData.daily[3].temp.morn;
        day3NoonTemp.innerText = oneCallData.daily[3].temp.eve;
        day3PmTemp.innerText = oneCallData.daily[3].temp.night;
        day3Desc.innerText = oneCallData.daily[3].weather[0].main;
    
        day4AmTemp.innerText = oneCallData.daily[4].temp.morn;
        day4NoonTemp.innerText = oneCallData.daily[4].temp.eve;
        day4PmTemp.innerText = oneCallData.daily[4].temp.night;
        day4Desc.innerText = oneCallData.daily[4].weather[0].main;
    
        day5AmTemp.innerText = oneCallData.daily[5].temp.morn;
        day5NoonTemp.innerText = oneCallData.daily[5].temp.eve;
        day5PmTemp.innerText = oneCallData.daily[5].temp.night;
        day5Desc.innerText = oneCallData.daily[5].weather[0].main;
    }
}




function searchCity() {
    cityInput = document.getElementById("cityInput").value;
    loadWeather(url_pt1 + cityInput + apikey, url5Day + cityInput + apikey);
}



//calls the function to load the entered location
search.addEventListener("click", function () {
    searchCity();
})



//saves the location to local storage
function saveCityToLS() {
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
}



//saves the location to the array of saved locations
function addCityToFavorites(cityInput) {
    favoritesArr.push(cityInput);
}


// function populateFromCurrent(){
//     currentLocation.innerText = weatherData.name + ", " + weatherData.sys.country;
// }

// function populateFromLatLon(){
//     currentTemp.innerText = weatherData.current.temp;
//     currentDayMorn.innerText = oneCallData.daily[0].temp.morn;
//     currentDayNoon.innerText = oneCallData.daily[0].temp.eve;
//     currentDayNight.innerText = oneCallData.daily[0].temp.night;
//     currentDayDesc.innerText = weatherData.current.weather[0].main;
//     //currentIcon.innerText = weatherData.current.weather[0].icon;
//     //figure out how to do icons and date conversions
//     day1AmTemp.innerText = oneCallData.daily[1].temp.morn;
//     day1NoonTemp.innerText = oneCallData.daily[1].temp.eve;
//     day1PmTemp.innerText = oneCallData.daily[1].temp.night;
//     day1Desc.innerText = oneCallData.daily[1].weather[0].main;

//     day2AmTemp.innerText = oneCallData.daily[2].temp.morn;
//     day2NoonTemp.innerText = oneCallData.daily[2].temp.eve;
//     day2PmTemp.innerText = oneCallData.daily[2].temp.night;
//     day2Desc.innerText = oneCallData.daily[2].weather[0].main;

//     day3AmTemp.innerText = oneCallData.daily[3].temp.morn;
//     day3NoonTemp.innerText = oneCallData.daily[3].temp.eve;
//     day3PmTemp.innerText = oneCallData.daily[3].temp.night;
//     day3Desc.innerText = oneCallData.daily[3].weather[0].main;

//     day4AmTemp.innerText = oneCallData.daily[4].temp.morn;
//     day4NoonTemp.innerText = oneCallData.daily[4].temp.eve;
//     day4PmTemp.innerText = oneCallData.daily[4].temp.night;
//     day4Desc.innerText = oneCallData.daily[4].weather[0].main;

//     day5AmTemp.innerText = oneCallData.daily[5].temp.morn;
//     day5NoonTemp.innerText = oneCallData.daily[5].temp.eve;
//     day5PmTemp.innerText = oneCallData.daily[5].temp.night;
//     day5Desc.innerText = oneCallData.daily[5].weather[0].main;
// }

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