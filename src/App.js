import React, { useState } from 'react';
import CityTable from './components/CityTable';
import WeatherPage from './components/WeatherPage';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Weather Forecast</h1>
      </header>
      <main className="app-main">
        {!selectedCity ? (
          <>
            <SearchBar setSelectedCity={setSelectedCity} />
            <CityTable setSelectedCity={setSelectedCity} />
          </>
        ) : (
          <WeatherPage selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        )}
      </main>
    </div>
  );
}

export default App