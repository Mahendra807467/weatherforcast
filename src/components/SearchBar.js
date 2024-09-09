import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ setSelectedCity }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setQuery(query);

    if (query.length > 2) {
      // Fetch suggestions from your API based on the query
      // Example API call:
      try {
        const response = await fetch(`https://api.example.com/cities?query=${query}`);
        const data = await response.json();
        setSuggestions(data.cities); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city) => {
    setSelectedCity(city);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for a city..."
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((city) => (
            <li key={city.id} onClick={() => handleSuggestionClick(city)}>
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;