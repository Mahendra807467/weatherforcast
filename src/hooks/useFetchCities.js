import { useState, useEffect } from 'react';
import { fetchCities } from '../utils/api';

export const useFetchCities = (query) => {
  const [cities, setCities] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchCities(query, page)
      .then(newCities => {
        setCities(prevCities => [...prevCities, ...newCities]);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [query, page]);

  return { cities, loading, error, setPage };
};