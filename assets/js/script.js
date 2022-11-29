var searchBtn = document.getElementById("search-btn")
var inputCity = document.getElementById("input-city")

function getApi() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&appid=a076f8aca8be2745eedd972c6da85de1";

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        alert("Not a city!");
    })
};

searchBtn.addEventListener('click', getApi);