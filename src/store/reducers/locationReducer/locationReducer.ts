import {
  GET_LOCATION,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAILURE,
  SET_CURRENT_CITY,
  SET_SEARCH_CITY,
  GET_CITIES,
  GET_CITIES_FAILURE,
  GET_CITIES_SUCCESS,
} from '../../actions/locationActions';
import { LocationStatus, IAction, ILocationState } from './locationModels';

const initialState: ILocationState = {
  cities: [],
  currentCity: 'Minsk',
  searchCity: '',
  status: '',
  error: '',
};

const locationReducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case GET_LOCATION: {
      return {
        ...state,
        status: LocationStatus.loading,
        error: '',
      };
    }

    case GET_LOCATION_SUCCESS: {
      return {
        ...state,
        currentCity: payload,
        status: LocationStatus.resolved,
      };
    }

    case GET_LOCATION_FAILURE: {
      return {
        ...state,
        status: LocationStatus.rejected,
        error: payload,
      };
    }

    case GET_CITIES: {
      return {
        ...state,
        status: LocationStatus.loading,
        error: '',
      };
    }

    case GET_CITIES_SUCCESS: {
      return {
        ...state,
        cities: payload,
        status: LocationStatus.resolved,
      };
    }

    case GET_CITIES_FAILURE: {
      return {
        ...state,
        status: LocationStatus.rejected,
        error: payload,
      };
    }

    case SET_CURRENT_CITY: {
      return { ...state, currentCity: payload };
    }

    case SET_SEARCH_CITY: {
      return { ...state, searchCity: payload };
    }

    default:
      return state;
  }
};

export { locationReducer };
