import { IForecastResponse } from '../../models/api';

const GET_FORECAST = 'GET_FORECAST';
const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';
const GET_FORECAST_FAILURE = 'GET_FORECAST_FAILURE';

const getForecast = () => ({ type: GET_FORECAST });

const getForecastSuccess = (forecast: IForecastResponse) => ({
  type: GET_FORECAST_SUCCESS,
  payload: forecast,
});

const getForecastFailure = (error: string) => ({
  type: GET_FORECAST_FAILURE,
  payload: error,
});

export {
  getForecast,
  getForecastSuccess,
  getForecastFailure,
  GET_FORECAST,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAILURE,
};
