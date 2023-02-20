import {
  GET_FORECAST,
  GET_FORECAST_FAILURE,
  GET_FORECAST_SUCCESS,
} from '../../actions/forecastActions';
import { ForecastStatus, IAction, IForecastState } from './forecastModels';

const initialState: IForecastState = {
  forecast: null,
  status: '',
  error: '',
};

const forecastReducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case GET_FORECAST: {
      return {
        ...state,
        status: ForecastStatus.loading,
        error: '',
      };
    }

    case GET_FORECAST_SUCCESS: {
      return {
        ...state,
        status: ForecastStatus.resolved,
        forecast: payload,
      };
    }

    case GET_FORECAST_FAILURE: {
      return {
        ...state,
        status: ForecastStatus.rejected,
        error: payload,
      };
    }

    default:
      return state;
  }
};

export { forecastReducer };
