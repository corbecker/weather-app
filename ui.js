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
}