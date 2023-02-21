import { locationReducer } from '../../../store/reducers/locationReducer/locationReducer';
import {
  getLocationSuccess,
  getLocationFailure,
} from '../../../store/actions/locationActions';

describe('location reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      cities: [],
      currentCity: 'Minsk',
      searchCity: '',
      status: '',
      error: '',
    };

    expect(locationReducer(initialState, { type: '' })).toEqual(initialState);
  });

  it('should set recieved payload', () => {
    const initialState = {
      cities: [],
      currentCity: 'Minsk',
      searchCity: '',
      status: '',
      error: '',
    };

    expect(locationReducer(initialState, getLocationSuccess('London'))).toEqual({
      ...initialState,
      currentCity: 'London',
      status: 'resolved',
    });
  });

  it('should set error when payload not recieved', () => {
    const initialState = {
      cities: [],
      currentCity: 'Minsk',
      searchCity: '',
      status: '',
      error: '',
    };

    expect(locationReducer(undefined, getLocationFailure('error'))).toEqual({
      ...initialState,
      status: 'rejected',
      error: 'error',
    });
  });
});
