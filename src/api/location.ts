import { WEATHER_URL, LOCATION_URL } from '../constants/baseUrl';

const API_KEY = process.env.REACT_APP_API_KEY;

const getCityByIP = async () => {
  const response = await fetch(`${LOCATION_URL}`);
  const { IPv4 } = await response.json();

  const location = await fetch(`${WEATHER_URL}ip.json?key=${API_KEY}&q=${IPv4}`);
  const { city } = await location.json();

  return city;
};

export { getCityByIP };
