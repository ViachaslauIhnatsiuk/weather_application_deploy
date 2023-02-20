import { getISODayStart, getISODayEnd } from '../../../helpers/date';
import {
  LOG_IN,
  LOG_OUT,
  SET_DATE_RANGE,
  GET_CALENDAR,
  GET_CALENDAR_SUCCESS,
  GET_CALENDAR_FAILURE,
} from '../../actions/calendarActions';
import { CalendarStatus, IAction, ICalendarState } from './calendarModels';

const range = [getISODayStart(), getISODayEnd()];

const initialState: ICalendarState = {
  calendarItems: [],
  dateRange: range,
  token: '',
  status: '',
  error: '',
};

const calendarReducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case LOG_IN: {
      return {
        ...state,
        token: payload,
        status: CalendarStatus.resolved,
        error: '',
      };
    }

    case LOG_OUT: {
      return {
        ...state,
        calendarItems: [],
        dateRange: range,
        token: '',
        status: '',
        error: '',
      };
    }

    case SET_DATE_RANGE: {
      return {
        ...state,
        dateRange: payload,
      };
    }

    case GET_CALENDAR: {
      return {
        ...state,
        status: CalendarStatus.loading,
        error: '',
      };
    }

    case GET_CALENDAR_SUCCESS: {
      return {
        ...state,
        status: CalendarStatus.resolved,
        calendarItems: payload,
      };
    }

    case GET_CALENDAR_FAILURE: {
      return {
        ...state,
        status: CalendarStatus.rejected,
        error: payload,
      };
    }

    default:
      return state;
  }
};

export { calendarReducer };
