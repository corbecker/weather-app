// Get location from search field
// add location to local storage
// get lat/long from location: https://www.met.ie/api/location/
// get short descriptions https://prodapi.metweb.ie/weather/short/Galway+City
// get forecast

class Weather {

  constructor(city){
    this.apiKey = 'f37fcd0b6e6fe2bab55debb80330677e';
    this.city = city;
  }
  async getCurrentWeather(location){
    // Free api so not going to implement server side key hiding stuff
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);
    return await response.json();
  }
}