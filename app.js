const ui = new UI;

ui.setDate();

const weather = new Weather;

weather.getCurrentWeather('carlow')
  .then(data => {
  })

document.getElementById('location-form').addEventListener('submit', (e) => {
  const loc = e.target.firstElementChild.value;
  weather.getCurrentWeather(loc)
  .then(data => {
    ui.setLocation(loc);
  })
});