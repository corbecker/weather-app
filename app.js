const ui = new UI;

ui.setDate();

const weather = new Weather;

document.getElementById('location-form').addEventListener('submit', getWeather);

function getWeather(e) {
  // Get locatoin search input
  let input = '';
  e ? input = e.target.firstElementChild.value : input = 'dublin';
  //Request weather data for that location
  weather.getCurrentWeather(input)
    .then(data => {
      console.log(data)
      //update ui elements
      ui.setLocation(input);
      ui.setWeatherDesc(data.weather);
      ui.setTemperature(data.main.temp);
    });
}

getWeather();