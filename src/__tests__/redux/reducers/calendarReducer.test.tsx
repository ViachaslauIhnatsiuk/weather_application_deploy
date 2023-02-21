import { calendarReducer } from '../../../store/reducers/calendarReducer/calendarReducer';
import {
  getCalendarFailure,
  getCalendarSuccess,
  logIn,
  logOut,
} from '../../../store/actions/calendarActions';
import { mockEvent } from '../../../constants/mockData';
import { getISODayEnd, getISODayStart } from '../../../helpers/date';

const range = [getISODayStart(), getISODayEnd()];

describe('calendar reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      calendarItems: [],
      dateRange: range,
      token: '',
      status: '',
      error: '',
    };

    expect(calendarReducer(initialState, { type: '' })).toEqual(initialState);
  });

  it('should set recieved payload', () => {
    const initialState = {
      calendarItems: [],
      dateRange: range,
      token: '',
      status: '',
      error: '',
    };

    expect(calendarReducer(initialState, getCalendarSuccess([mockEvent]))).toEqual({
      ...initialState,
      status: 'resolved',
      calendarItems: [mockEvent],
    });
  });

  it('should set error when payload not recieved', () => {
    const initialState = {
      calendarItems: [],
      dateRange: range,
      token: '',
      status: '',
      error: '',
    };

    expect(calendarReducer(undefined, getCalendarFailure('error'))).toEqual({
      ...initialState,
      status: 'rejected',
      error: 'error',
    });
  });

  it('should set auth token when sign in', () => {
    const initialState = {
      calendarItems: [],
      dateRange: range,
      token: '',
      status: '',
      error: '',
    };

    expect(calendarReducer(initialState, logIn('token'))).toEqual({
      ...initialState,
      token: 'token',
      status: 'resolved',
    });
  });

  it('should remove auth token from storage when sign out', () => {
    const initialState = {
      calendarItems: [],
      dateRange: range,
      token: '',
      status: '',
      error: '',
    };

    expect(calendarReducer(initialState, logOut())).toEqual({
      ...initialState,
    });
  });
});
