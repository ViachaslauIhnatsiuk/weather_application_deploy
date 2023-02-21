import { ICity } from '../../models/api';

const GET_LOCATION = 'GET_LOCATION';
const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';
const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
const SET_SEARCH_CITY = 'SET_SEARCH_CITY';
const GET_CITIES = 'GET_CITIES';
const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';
const GET_CITIES_FAILURE = 'GET_CITIES_FAILURE';

const getLocation = () => ({ type: GET_LOCATION });

const getLocationSuccess = (city: string) => ({
  type: GET_LOCATION_SUCCESS,
  payload: city,
});

const getLocationFailure = (error: string) => ({
  type: GET_LOCATION_FAILURE,
  payload: error,
});

const setCurrentCity = (city: string) => ({ type: SET_CURRENT_CITY, payload: city });

const setSearchCity = (seacrhCity: string) => ({
  type: SET_SEARCH_CITY,
  payload: seacrhCity,
});

const getCities = () => ({ type: GET_CITIES });

const getCitiesSuccess = (cities: ICity[]) => ({
  type: GET_CITIES_SUCCESS,
  payload: cities,
});

const getCitiesFailure = (error: string) => ({
  type: GET_CITIES_FAILURE,
  payload: error,
});

export {
  GET_LOCATION,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAILURE,
  SET_CURRENT_CITY,
  SET_SEARCH_CITY,
  GET_CITIES,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  getLocation,
  getLocationSuccess,
  getLocationFailure,
  setCurrentCity,
  setSearchCity,
  getCities,
  getCitiesSuccess,
  getCitiesFailure,
};
