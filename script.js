let today = moment();
$("#today").text(today.format("dddd MMMM Do"));
$("#day1Date").text(today.format("dddd MMMM Do"));
$("#day2Date").text(today.add(1, "days").format("dddd MMMM Do"));
$("#day3Date").text(today.add(2, "days").format("dddd MMMM Do"));
$("#day4Date").text(today.add(3, "days").format("dddd MMMM Do"));
$("#day5Date").text(today.add(4, "days").format("dddd MMMM Do"));


let searchBtn = document.getElementById('searchBtn');
let searchedCity = document.getElementById('searchedCity');
let cityName = document.getElementById("city");
let todaysTemp = document.getElementById('temperature');
let todaysWindSpeed = document.getElementById('wind-speed');
let todayshumidity = document.getElementById('humidity');

let day1Temp = document.getElementById('day1T');
let day2Temp = document.getElementById('day2T');
let day3Temp = document.getElementById('day3T');
let day4Temp = document.getElementById('day4T');
let day5Temp = document.getElementById('day5T');


let day1Wind = document.getElementById('day1W');
let day2Wind = document.getElementById('day2W');
let day3Wind = document.getElementById('day3W');
let day4Wind = document.getElementById('day4W');
let day5Wind = document.getElementById('day5W');

let day1Humidity = document.getElementById('day1H');
let day2Humidity = document.getElementById('day2H');
let day3Humidity = document.getElementById('day3H');
let day4Humidity = document.getElementById('day4H');
let day5Humidity = document.getElementById('day5H');

let day1Img = document.getElementById('day1Img');
const listOfcities = []

function citiesPastList() {
    listOfcities = JSON.parse(localStorage.getItem('cities')) || [];
    listOfcities.forEach(cities => {
        console.log(cities)
        let button = document.createElement('button');
        button.classList.add("pastCitiesBtn");
        console.log(button);
        button.textContent = cities
        pastDrinks.append(button);
    })}
    citiesPastList()


const apiKey = "e85bf845a5b6e3a8c317ab669bc8f0f9";

function searchCityWeather() {
    city = searchedCity.value;
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +  city + '&units=imperial&cnt=65&appid=' + apiKey;
    console.log(city)
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
    city = searchedCity.value;
    let forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&cnt=65&appid=" + apiKey;
    fetch(forecastApiUrl)
        .then(function(response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function(data) {
            let temp1 = data['list']['0']['main']['temp'];
            let temp2 = data['list']['8']['main']['temp'];
            let temp3 = data['list']['16']['main']['temp'];
            let temp4 = data['list']['24']['main']['temp'];
            let temp5 = data['list']['32']['main']['temp'];
            let wind1 = data['list']['0']['wind']['speed'];
            let wind2 = data['list']['8']['wind']['speed'];
            let wind3 = data['list']['16']['wind']['speed'];
            let wind4 = data['list']['24']['wind']['speed'];
            let wind5 = data['list']['32']['wind']['speed'];
            let humidity1 = data['list']['0']['main']['humidity'];
            let humidity2 = data['list']['8']['main']['humidity'];
            let humidity3 = data['list']['16']['main']['humidity'];
            let humidity4 = data['list']['24']['main']['humidity'];
            let humidity5 = data['list']['32']['main']['humidity'];
            // let img1 = data['list'][0]['weather'][0]['icon'];

            // day1Img.textContent = img1;




            day1Temp.textContent = temp1;
            day2Temp.textContent = temp2;
            day3Temp.textContent = temp3;
            day4Temp.textContent = temp4;
            day5Temp.textContent = temp5;

            day1Wind.textContent = wind1;
            day2Wind.textContent = wind2;
            day3Wind.textContent = wind3;
            day4Wind.textContent = wind4;
            day5Wind.textContent = wind5;

            day1Humidity.textContent = humidity1 + "%";
            day2Humidity.textContent = humidity2 + "%";
            day3Humidity.textContent = humidity3 + "%";
            day4Humidity.textContent = humidity4 + "%";
            day5Humidity.textContent = humidity5 + "%";

        console.log(data);
        console.log(img1);
    
});
} 
function int(event) {
        event.preventDefault();
        searchCityWeather();
        searchCityForecast();
    
}













searchBtn.addEventListener('click', int);