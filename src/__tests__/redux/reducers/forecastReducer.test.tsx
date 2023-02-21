import { forecastReducer } from '../../../store/reducers/forecastReducer/forecastReducer';
import { mockForecast } from '../../../constants/mockData';
import {
  getForecastSuccess,
  getForecastFailure,
} from '../../../store/actions/forecastActions';

describe('forecast reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      forecast: null,
      status: '',
      error: '',
    };

    expect(forecastReducer(initialState, { type: '' })).toEqual(initialState);
  });

  it('should set recieved payload', () => {
    const initialState = {
      forecast: null,
      status: '',
      error: '',
    };

    expect(forecastReducer(initialState, getForecastSuccess(mockForecast))).toEqual({
      forecast: mockForecast,
      status: 'resolved',
      error: '',
    });
  });

  it('should set error when payload not recieved', () => {
    expect(forecastReducer(undefined, getForecastFailure('error'))).toEqual({
      forecast: null,
      status: 'rejected',
      error: 'error',
    });
  });
});
