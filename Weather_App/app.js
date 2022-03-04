// Init Weather Object
const weather = new Weather("London");

// Init UI
const ui = new UI();
// Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
