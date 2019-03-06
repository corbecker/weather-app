class UI {
  setDate() {
    const now = new Date;
    let day = 0;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    switch(now.getDay()){
      case 0:
        day = 'Sunday';
        break;
      case 1:
        day = 'Monday';
        break;
      case 2:
        day = 'Tuesday';
        break;
      case 3:
        day = 'Wednesday';
        break;
      case 4:
        day = 'Thursday';
        break;
      case 5:
        day = 'Friday';
        break;
      case 6:
        day = 'Saturday';
        break;
    }

    document.querySelector('.date').textContent = `${day} ${hours}:${minutes < 10 ? '0'+ minutes : minutes }`;
  }

  setLocation(location) {
    document.getElementById('location').innerText = Utils.capitalize(location);
  }

  setWeatherDesc(weather) {
    document.getElementById('w-desc').innerText = Utils.capitalize(weather[0].description);
  }

  setTemperature(data) {
    const formattedTemp = Math.round(data.main.temp);
    
    document.getElementById('w-temp').innerHTML = `
      ${formattedTemp}<sup>&#8451;</sup>
      <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
    `;
  }

  setDetailedWeather(data){
    const list = document.getElementById('w-details');
    list.innerHTML = `
    <table class="table table-default">
    <thead>
      <tr>
        <th scope="col">Humidity</th>
        <th scope="col">Pressure</th>
        <th scope="col">Min Temp</th>
        <th scope="col">Max Temp</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">${data.main.humidity}%</th>
        <th scope="row">${data.main.pressure} hPa</th>
        <th scope="row">${Math.round(data.main.temp_min)}<sup>&#8451;</sup></th>
        <th scope="row">${Math.round(data.main.temp_max)}<sup>&#8451;</sup></th>
      </tr>
    </tbody>
  </table> 
    `;
  }

  showAlert(message, type){
    let alertClass = '';
    switch(type){
      case 'danger':
        alertClass = 'alert alert-danger';
      break;
      default:
        alertClass = 'alert-light';
    }
    const div = document.createElement('div');
    div.className += alertClass;
    div.className += ' col-md-10 mt-3 mx-auto';
    div.appendChild(document.createTextNode(message));
    const parent = document.getElementById('w-container');
    const sibling = document.getElementById('w-card');
    parent.insertBefore(div, sibling);

    setTimeout(() => {
      div.remove();
    }, 2000)
  }
}