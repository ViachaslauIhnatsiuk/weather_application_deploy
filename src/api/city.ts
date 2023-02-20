import { WEATHER_URL } from '../constants/baseUrl';
import { ICityResponse } from '../models/api';

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchCities = async (value: string): Promise<ICityResponse> => {
  const response = await fetch(
    `${WEATHER_URL}search.json?key=${API_KEY}&q=${value || 'Minsk'}`,
  );
  const cities = await response.json();

  return cities;
};

export { fetchCities };
