export const getDate = (date: number) => {
  const d = new Date(date * 1000);
  const day = d.getDay();
  const getDay = () => {
    if (day === 1) {
      return 'Monday';
    } if (day === 2) {
      return 'Tuesday';
    } if (day === 3) {
      return 'Wednesday';
    } if (day === 4) {
      return 'Thursday';
    } if (day === 5) {
      return 'Friday';
    } if (day === 6) {
      return 'Saturday';
    }
    return 'Sunday';

  };
  return getDay();
};

export const getTime = (time: number) => {
  return `${new Date(time * 1000).toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}`;
};

export const hasGeolocationSupport = () => {
  return !!navigator.geolocation;
};

export const getWeatherPic = (weather: string) => {
  if (weather === 'clouds') {
    return 'clouds.png';
  } if (weather === 'rain') {
    return 'raining.png';
  } if (weather === 'sun' || weather === 'clear') {
    return 'sun.png';
  } if (weather === 'extreme') {
    return 'thunderstorm.png';
  } if (weather === 'mist'){
    return 'mist.png';
  }
  return 'sun.png';
};

const kelvintocelsius = (k: number) => {
  return (k - 273.15).toFixed(1);
};

export const getWeatherInfo = async (cityName: string) => {

  const info = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fe1613e6c959dfb591e059d062de0ccb`)
    .then(response => response.json())
    .then(data => {
      const modify = { ...data };
      modify.main.temp = kelvintocelsius(data.main.temp);
      modify.main.temp_min = kelvintocelsius(data.main.temp_min);
      modify.main.temp_max = kelvintocelsius(data.main.temp_max);
      modify.main.currDay = getDate(data.dt);
      modify.main.countryName = modify.name;
      modify.main.description = modify.weather[0].description;
      modify.main.weatherCondition = modify.weather[0].main;
      modify.main.currTime = getTime(data.dt);
      modify.main.weatherIcon = getWeatherPic(data.weather[0].main.toLowerCase());
      return modify.main;
    });

  return info;
};
