class Storage {

  setCity(city) {
    localStorage.setItem('city', city);
  }

  getCity() {
    return localStorage.getItem('city');
  }

}