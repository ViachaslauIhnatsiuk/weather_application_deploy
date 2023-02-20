import {
  LOG_IN,
  LOG_OUT,
  GET_CALENDAR,
  GET_CALENDAR_SUCCESS,
  GET_CALENDAR_FAILURE,
} from '../../actions/calendarActions';
import { CalendarStatus, IAction, ICalendarState } from './calendarModels';

const initialState: ICalendarState = {
  calendarItems: [],
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
        token: '',
        status: '',
        error: '',
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
