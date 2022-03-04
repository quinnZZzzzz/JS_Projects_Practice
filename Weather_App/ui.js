class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.description = document.getElementById("w-desc");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.visibility = document.getElementById("w-visibility");
    this.wind = document.getElementById("w-wind");
    this.temp = document.getElementById("w-temp");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = "Humidity: " + weather.main.humidity;
    this.visibility.textContent = "Visibility: " + weather.visibility;
    this.wind.textContent = "Wind Speed: " + weather.wind.speed;
    this.temp.textContent =
      "Temperature: " + (weather.main.temp - 273.15).toFixed(1);
  }
}
// b = ((a - 32) * 5) / 9;
