const ui = new UI;

ui.setDate();



document.getElementById('location-form').addEventListener('submit', getWeather);

function getWeather(e) {
  // Get locatoin search input
  let city = '';
  e ? city = e.target.firstElementChild.value : city = 'dublin';
  const weather = new Weather(city);
  //Request weather data for that location
  weather.getCurrentWeather(city)
    .then(data => {
      console.log(data)
      //update ui elements
      if(data.message === "city not found"){
        ui.showAlert('City not found.', 'danger');
      }else{
        ui.setLocation(weather.city);
        ui.setWeatherDesc(data.weather);
        ui.setTemperature(data);
        ui.setDetailedWeather(data);
      }
    })
    .catch(err => {
      console.log(err);
    })
    
}

getWeather();