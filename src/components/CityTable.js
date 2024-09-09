import React, { useState } from 'react';
import { useFetchCities } from '../hooks/useFetchCities';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import '../styles/CityTable.css';

const CityTable = ({ onSelectCity }) => {
  const [query, setQuery] = useState('');
  const { cities, loading, error, setPage } = useFetchCities(query);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="city-table" onScroll={handleScroll}>
      <input
        type="text"
        placeholder="Search cities..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {error && <ErrorMessage message={error} />}
      <table>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Country</th>
            <th>Timezone</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city => (
            <tr key={city.fields.geonameid} onClick={() => onSelectCity(city.fields.name)}>
              <td>{city.fields.name}</td>
              <td>{city.fields.country}</td>
              <td>{city.fields.timezone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <Loader />}
    </div>
  );
};

export default CityTable;