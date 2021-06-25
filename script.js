let today = moment();
$("#today").text(today.format("dddd MMMM Do YYYY"));

let searchBtn = document.getElementById('searchBtn');
let searchedCity = document.getElementById('searchedCity');


let city = 'London';
const apiKey = "e85bf845a5b6e3a8c317ab669bc8f0f9";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +  city + '&appid=' + apiKey;


function searchCity() {
    fetch(apiUrl)
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

searchCity();











searchBtn.addEventListener('click', searchCity);