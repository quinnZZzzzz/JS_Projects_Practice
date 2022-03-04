class Storage {
  constructor(city) {
    this.city;
    this.defaultCity = "London";
  }

  getLocationData() {
    if (localStorage.getItem(city) === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem(city);
    }
    return this.city;
  }

  setLocationData(city) {
    localStorage.setItem("city", city);
  }
}

//deal with modal -- change location and save location to local storage
