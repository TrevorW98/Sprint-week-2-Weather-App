// Trevor Womack
// 12/08/2020
// Sprint Week 2 Day 2
// This code is the front end development of the prototype created by Adrian Segura.
// on this page, you can type in a city in the search bar, push search, and data for that city 
// will populate the console. 

let url_pt1 = "http://api.openweathermap.org/data/2.5/weather?q=";
let url5Day = "http://api.openweathermap.org/data/2.5/forecast?q=";
let apikey = "&appid=3bdbeade6189c91354f9f969824f70b6";
let imperial = "&units=imperial";

let search = document.getElementById("search");
let cityInput = "stockton";
let save = document.getElementById("save");

let favoritesArr = [];
let cityArr = [];
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

onLoad();


function loadWeather(url, url5Day) {
    let cityInput = document.getElementById("cityInput").value;
    fetch(url).then(
        current => current.json()
    ).then(weatherData => {
        console.log("This data is coming from the current weather API", weatherData);
        getLatLon(weatherData.coord.lat, weatherData.coord.lon);
        currentLocation.innerText = weatherData.name + ", " + weatherData.sys.country;
    });
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

        currentTemp.innerText = Math.trunc(oneCallData.current.temp) + "°F";
        currentDayMorn.innerText = Math.trunc(oneCallData.daily[0].temp.morn) + "°F";
        currentDayNoon.innerText = Math.trunc(oneCallData.daily[0].temp.eve) + "°F";
        currentDayNight.innerText = Math.trunc(oneCallData.daily[0].temp.night) + "°F";
        currentDayDesc.innerText = oneCallData.current.weather[0].main;
        let mycurrentDate = new Date(oneCallData.current.dt * 1000);
        currentDate.innerText = mycurrentDate.toDateString();
        document.getElementById("currentIcon").src = "http://openweathermap.org/img/wn/" + oneCallData.current.weather[0].icon + "@2x.png";


        day1AmTemp.innerText = "AM: " + Math.trunc(oneCallData.daily[1].temp.morn) + "°F";
        day1NoonTemp.innerText = "Eve: " + Math.trunc(oneCallData.daily[1].temp.eve) + "°F";
        day1PmTemp.innerText = "PM: " + Math.trunc(oneCallData.daily[1].temp.night) + "°F";
        day1Desc.innerText = oneCallData.daily[1].weather[0].main;
        let my1Date = new Date(oneCallData.daily[1].dt * 1000);
        day1Date.innerText = my1Date.getMonth() + 1 + "/" + my1Date.getDate();
        document.getElementById("day1Icon").src = "http://openweathermap.org/img/wn/" + oneCallData.daily[1].weather[0].icon + "@2x.png";

        day2AmTemp.innerText = "AM: " + Math.trunc(oneCallData.daily[2].temp.morn) + "°F";
        day2NoonTemp.innerText = "Eve: " + Math.trunc(oneCallData.daily[2].temp.eve) + "°F";
        day2PmTemp.innerText = "PM: " + Math.trunc(oneCallData.daily[2].temp.night) + "°F";
        day2Desc.innerText = oneCallData.daily[2].weather[0].main;
        let my2Date = new Date(oneCallData.daily[2].dt * 1000);
        day2Date.innerText = my2Date.getMonth() + 1 + "/" + my2Date.getDate();
        document.getElementById("day2Icon").src = "http://openweathermap.org/img/wn/" + oneCallData.daily[2].weather[0].icon + "@2x.png";

        day3AmTemp.innerText = "AM: " + Math.trunc(oneCallData.daily[3].temp.morn) + "°F";
        day3NoonTemp.innerText = "Eve: " + Math.trunc(oneCallData.daily[3].temp.eve) + "°F";
        day3PmTemp.innerText = "PM: " + Math.trunc(oneCallData.daily[3].temp.night) + "°F";
        day3Desc.innerText = oneCallData.daily[3].weather[0].main;
        let my3Date = new Date(oneCallData.daily[3].dt * 1000);
        day3Date.innerText = my3Date.getMonth() + 1 + "/" + my3Date.getDate();
        document.getElementById("day3Icon").src = "http://openweathermap.org/img/wn/" + oneCallData.daily[3].weather[0].icon + "@2x.png";

        day4AmTemp.innerText = "AM: " + Math.trunc(oneCallData.daily[4].temp.morn) + "°F";
        day4NoonTemp.innerText = "Eve: " + Math.trunc(oneCallData.daily[4].temp.eve) + "°F";
        day4PmTemp.innerText = "PM: " + Math.trunc(oneCallData.daily[4].temp.night) + "°F";
        day4Desc.innerText = oneCallData.daily[4].weather[0].main;
        let my4Date = new Date(oneCallData.daily[4].dt * 1000);
        day4Date.innerText = my4Date.getMonth() + 1 + "/" + my4Date.getDate();
        document.getElementById("day4Icon").src = "http://openweathermap.org/img/wn/" + oneCallData.daily[4].weather[0].icon + "@2x.png";

        day5AmTemp.innerText = "AM: " + Math.trunc(oneCallData.daily[5].temp.morn) + "°F";
        day5NoonTemp.innerText = "Eve: " + Math.trunc(oneCallData.daily[5].temp.eve) + "°F";
        day5PmTemp.innerText = "PM: " + Math.trunc(oneCallData.daily[5].temp.night) + "°F";
        day5Desc.innerText = oneCallData.daily[5].weather[0].main;
        let my5Date = new Date(oneCallData.daily[5].dt * 1000);
        day5Date.innerText = my5Date.getMonth() + 1 + "/" + my5Date.getDate();
        document.getElementById("day5Icon").src = "http://openweathermap.org/img/wn/" + oneCallData.daily[5].weather[0].icon + "@2x.png";
    }
}

function searchCity() {
    cityInput = document.getElementById("cityInput").value;
    loadWeather(url_pt1 + cityInput + imperial + apikey, url5Day + cityInput + imperial + apikey);
}

//calls the function to load the entered location
search.addEventListener("click", function () {
    searchCity();
})

//saves the location to local storage
function saveCityLS() {
    localStorage.setItem("favoritesArr", JSON.stringify(favoritesArr));
}

//saves the location to the array of saved locations
function addCityToFavorites() {

    favoritesArr.push(cityInput);
}

save.addEventListener("click", function () {
    addCityToFavorites();
    console.log(favoritesArr);
    setTimeout(function () {
        saveCityLS();
    }, 1000)
    createListFavs();
})

//This loads the favorites list on start
function onLoad() {
    let savedCities = JSON.parse(localStorage.getItem("favoritesArr"));
    console.log(savedCities);
    if (savedCities != null) {
        cityArr = savedCities;
        for (let i = 0; i < cityArr.length; i++) {
            let favBtn = document.createElement("button");
            //add classes here
            favBtn.classList.add("rounded-sm", "btnSpecs");
            favBtn.innerHTML = cityArr[i];
            favBtn.addEventListener("click", function () {
                cityInput = favBtn.innerText;
                loadWeather(url_pt1 + cityInput + imperial + apikey, url5Day + cityInput + imperial + apikey);
            });

            let trash = document.createElement("button");
            trash.classList.add("fas", "fa-trash-alt", "trashSpecs");

            trash.addEventListener("click", function () {
                let locationValue = cityArr.indexOf(cityInput);
                cityArr.splice(locationValue, 1);
                localStorage.setItem("favoritesArr", JSON.stringify(favoritesArr));
                favBtn.remove();
                this.parentElement.remove();

            });

            favBtn.appendChild(trash);
            LSList.appendChild(favBtn);
        }
    }
}

//this loads the list of faves on save and deletes on trash click
//Christy was the main inspiration for this chunk of code, of which i used to develop my onLoad() function
function createListFavs() {
    let favBtn = document.createElement("button");
    //add classes here
    favBtn.classList.add("rounded-sm", "btnSpecs");
    favBtn.innerHTML = cityInput;
    favBtn.addEventListener("click", function () {
        cityInput = favBtn.innerText;
        loadWeather(url_pt1 + cityInput + imperial + apikey, url5Day + cityInput + imperial + apikey);
    });

    let trash = document.createElement("button");
    trash.classList.add("fas", "fa-trash-alt", "trashSpecs");
    trash.addEventListener("click", function () {
        let locationValue = cityArr.indexOf(cityInput);
        cityArr.splice(locationValue, 1);
        localStorage.setItem("favoritesArr", JSON.stringify(favoritesArr));
        favBtn.remove();
        this.parentElement.remove();
    });

    favBtn.appendChild(trash);
    LSList.appendChild(favBtn);
}
