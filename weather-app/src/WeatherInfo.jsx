import React from 'react';

function WeatherInfo({ weatherData }) {
    //console.log(weatherData);
  return (
    <div className='weatherInfo'>
      <h2>{weatherData.name}</h2>
      <p>Temperatur: {weatherData.main.temp}°C</p>
      <p>Luftfeuchtigkeit: {weatherData.main.humidity}%</p>
      <p>
        Wetterbedingungen: {weatherData.weather[0].main} - {weatherData.weather[0].description}
      </p>
    </div>
  );
}

export default WeatherInfo;
