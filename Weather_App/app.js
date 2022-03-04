// Init UI
const ui = new UI();

// Init Storage
const storage = new Storage();
// Get Stored Location Data
const weatherLocation = storage.getLocationData();

console.log(weatherLocation);
// Init Weather Object
const weather = new Weather(weatherLocation);

// Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change Location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  weather.changeLocation(city);

  // Set Location in Local Storage
  storage.setLocationData(city);

  // Get Weather and display weather
  getWeather();

  // Close modal -- jquery
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
