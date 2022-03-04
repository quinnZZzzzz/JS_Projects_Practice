class Weather {
  constructor(city) {
    this.apiKey = "44ad2c7f5e8a621a48dda6ddaff47c35";
    this.city = city;
  }

  // Fetch weather from api
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change Location
  changeLocation(city) {
    this.city = city;
  }
}
