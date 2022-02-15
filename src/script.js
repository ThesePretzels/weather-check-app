function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");

  fahrenheitTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  document.querySelector("#city").innerHTML = response.data.name;
  //document.querySelector("#temperature").innerHTML = Math.round(
  //response.data.main.temp
  //);
}

function convertDegreesCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  //fahrenheitTemperature = response.data.main.temp;
  let celsiusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

//function convertDegreesCelsius(event) {
//let temperatureCelsius = document.querySelector("#temperature");
//temperatureCelsius.innerHTML = "4°C";
//}

let linkCelsius = document.querySelector("#celsius-link");
linkCelsius.addEventListener("click", convertDegreesCelsius);

//function convertDegreesFahrenheit(event) {
//let temperatureFahrenheit = document.querySelector("#temperature");
//temperatureFahrenheit.innerHTML = "39°F";
//}

function convertDegreesFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  //let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  //temperatureFahrenheit.innerHTML = Math.round(fahrenheitTemperature);
}

let fahrenheitTemperature = null;

let linkFahrenheit = document.querySelector("#fahrenheit-link");
linkFahrenheit.addEventListener("click", convertDegreesFahrenheit);

let now = new Date();
let date = now.getDate();
let daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = daysOfTheWeek[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let h3 = document.querySelector("h3");
h3.innerHTML = `${day}, ${month} ${date} ${hours}:${minutes}`;

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

function showPosition(position) {
  let apiKey = "c1fa9f847c511525ed9b4f7ba5269786";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);
}

function getForecast(coordinates) {
  let apiKey = "c1fa9f847c511525ed9b4f7ba5269786";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayForecast);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  //let descriptionElement = document.querySelector("#description");
  //let humidityElement = document.querySelector("#humidity");
  //let windElement = document.querySelector("#wind");
  //let dateElement = document.querySelector("#date");
  //let iconElement = document.querySelector("#icon");

  fahrenheitTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  cityElement.innerHTML = response.data.name;
  //descriptionElement.innerHTML = response.data.weather[0].description;
  //humidityElement.innerHTML = response.data.main.humidity;
  //windElement.innerHTML = Math.round(response.data.wind.speed);
  //dateElement.innerHTML = formatDate(response.data.dt * 1000);
  //iconElement.setAttribute(
  //"src",
  //`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  //);
  //iconElement.setAttribute("alt", response.data.weather[0].description);

  //getForecast(response.data.coord);

  //document.querySelector("#city").innerHTML = response.data.name;
  //document.querySelector("#temperature").innerHTML = Math.round(
  //response.data.main.temp
  //);
}

function searchCity(city) {
  let apiKey = "c1fa9f847c511525ed9b4f7ba5269786";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);
}

function searchClickButton(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#input-search-city");
  searchCity(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchClickButton);

searchCity("Paris");
