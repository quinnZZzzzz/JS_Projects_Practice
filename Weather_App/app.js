// Init Weather Object
const weather = new Weather("London");

// Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((results) => console.log(results))
    .catch((err) => console.log(err));
}
