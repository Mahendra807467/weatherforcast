import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../utils/api';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import '../styles/WeatherPage.css';

const WeatherPage = ({ cityName }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather(cityName)
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [cityName]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="weather-page">
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      {/* Additional weather info */}
    </div>
  );
};

export default WeatherPage;