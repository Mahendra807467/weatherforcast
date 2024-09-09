export const fetchCities = async (query, page) => {
    const response = await fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=${query}&start=${page * 10}&rows=10`);
    const data = await response.json();
    return data.records;
  };
  
  export const fetchWeather = async (cityName) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY`);
    const data = await response.json();
    return data;
  };