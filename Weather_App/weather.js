class Weather {
  constructor(city) {
    this.apiKey = "44ad2c7f5e8a621a48dda6ddaff47c35";
    // this.apiKey = "ff18218fa3d8461c8c3193448220403"
    this.city = city;
    // this.postcode = postcode;
  }

  // Fetch weather from api
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
      // `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.postcode}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change Location
  changeLocation(city) {
    this.city = city;
  }
}
