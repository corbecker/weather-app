const ui = new UI;
ui.setDate();

document.getElementById('location-form').addEventListener('submit', getWeather);

function getWeather(e) {
  
  let city = '';
  // Local storage instance
  const storage = new Storage;

  // If nothing in local storage and first load
  if(e.currentTarget === document && storage.getCity() === null){
    city = 'dublin';
  } else if((e.currentTarget === document && storage.getCity !== '')){
    // Use local storage city
    city = storage.getCity();
  }else {
    // Use form submitted city
    city = e.target.firstElementChild.value;
  }

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
        storage.setCity(city);
      }
    })
    .catch(err => {
      console.log(err);
    })
    
}

document.addEventListener('DOMContentLoaded', getWeather);