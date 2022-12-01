var searchBtn = document.getElementById("search-btn");
var inputCity = document.getElementById("input-city");
var cityName = document.querySelector(".city-name");
var descriptionData = document.querySelector(".description");
var tempData = document.querySelector(".temp");
var windData = document.querySelector(".wind");
var humidityData = document.querySelector(".humidity");


function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&appid=a076f8aca8be2745eedd972c6da85de1&units=metric';

    fetch(requestUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) { 
        console.log(data);
        var city = data['name'];
        // Data retrieved is the description of the '0' index from the 'weather' index
        var description = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var windSpeed = data['wind']['speed'];
        var humidity = data['main']['humidity'];
        
        cityName.textContent = city;
        descriptionData.textContent = description;
        tempData.textContent = temperature;
        windData.textContent = windSpeed;
        humidityData.textContent = humidity;

    })
    .catch(function (err) {
        alert("Not a city!");
    })

    // Requesting data forecast for 5 days
    var requestFiveDayForecast = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputCity.value+'&appid=a076f8aca8be2745eedd972c6da85de1&cnt=5';
    
    // Retrieving ID's of each box for the 5 day forecast
    var boxOne = document.getElementById("day-1");
    var boxTwo = document.getElementById("day-2");
    var boxThree = document.getElementById("day-3");
    var boxFour = document.getElementById("day-4");
    var boxFive = document.getElementById("day-5");

    fetch(requestFiveDayForecast)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        var dayOne = data['list'][0];
        var dayTwo = data['list'][1];
        var dayThree = data['list'][2];
        var dayFour = data['list'][3];
        var dayFive = data['list'][4];

    })
};

searchBtn.addEventListener('click', getApi);