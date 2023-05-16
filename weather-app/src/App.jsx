import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo.jsx';
import { BiRotateRight } from 'react-icons/bi';

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lastSearchedCity = localStorage.getItem('lastSearchedCity');
    if (lastSearchedCity) {
      setCityName(lastSearchedCity);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = '49b97992ef055c5033bfd0c0c9ef93cd';
      if (cityName) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
          );
          if (response.ok) {
            const data = await response.json();
            //console.log(data);
            setWeatherData(data);
            localStorage.setItem('lastSearchedCity', cityName);
            setLoading(false);
            setError('');
          } else {
            setError('City not found.');
            setWeatherData(null);
          }
        } catch (error) {
          setError('API query failed.');
          //console.log(error);
          setWeatherData(null);
        }
      }
    };
    fetchData();
  }, [cityName]);

  //console.log(weatherData);
  return (
    <div className="App">
      <h1>Wetter-App</h1>

      <SearchBar onSearchCity={setCityName} />
      {error && <p>{error}</p>}
      {loading ? (
        <p className="loading">
          <BiRotateRight /> Loading...
        </p>
      ) : (
        <WeatherInfo weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
