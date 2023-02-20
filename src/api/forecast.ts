import { WEATHER_URL } from '../constants/baseUrl';
import { IForecastResponse } from '../models/api';

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchForecast = async (city: string): Promise<IForecastResponse> => {
  const response = await fetch(
    `${WEATHER_URL}forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=no`,
  );
  const forecast = await response.json();

  return forecast;
};

export { fetchForecast };
