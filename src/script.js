function convertDegreesCelsius(event) {
  let temperatureCelsius = document.querySelector("#temperature");
  temperatureCelsius.innerHTML = "4°C";
}

let linkCelsius = document.querySelector("#celsius-link");
linkCelsius.addEventListener("click", convertDegreesCelsius);

function convertDegreesFahrenheit(event) {
  let temperatureFahrenheit = document.querySelector("#temperature");
  temperatureFahrenheit.innerHTML = "39°F";
}

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

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  let apiKey = "c1fa9f847c511525ed9b4f7ba5269786";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function searchClickButton(event) {
  event.preventDefault();
  //let searchInput = document.querySelector("#input-search-city");
  //let h2 = document.querySelector("h2");
  //if (searchInput.value) {
  //h2.innerHTML = `${searchInput.value}`;
  //} else {
  //h2.innerHTML = null;
  //alert("Please enter a city to search");
  //}
  let city = document.querySelector("#input-search-city").value;
  searchCity(city);
}

function showPosition(position) {
  let apiKey = "c1fa9f847c511525ed9b4f7ba5269786";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchClickButton);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Paris");
