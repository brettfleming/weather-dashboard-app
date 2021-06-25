let today = moment();
$("#today").text(today.format("dddd MMMM Do YYYY"));

let searchBtn = document.getElementById('searchBtn');
let searchedCity = document.getElementById('searchedCity');
let cityName = document.getElementById("city");
let todaysTemp = document.getElementById('temperature');
let todaysWindSpeed = document.getElementById('wind-speed');
let todayshumidity = document.getElementById('humidity');
let city = 'New York';
const apiKey = "e85bf845a5b6e3a8c317ab669bc8f0f9";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +  city + '&appid=' + apiKey;
let forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey

function searchCityWeather() {
    cityName.textContent = city
    fetch(apiUrl)
        .then(function(response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function(data) {
            let temp =data['main']['temp'];
            let windSpeed = data['wind']['speed'];
            let humidity = data['main']['humidity'];


            todaysTemp.textContent = temp;
            todayshumidity.textContent = humidity + '%';
            todaysWindSpeed.textContent = windSpeed;
            

        console.log(data);
    
});
} 
function searchCityForecast() {
    fetch(forecastApiUrl)
        .then(function(response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function(data) {

            

        console.log(data);
    
});
} 

searchCityWeather();
searchCityForecast();












// searchBtn.addEventListener('click', searchCity);