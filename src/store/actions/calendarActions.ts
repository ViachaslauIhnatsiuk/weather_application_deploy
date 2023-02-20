import { ICalendarItem } from '../../models/api';

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_CALENDAR = 'GET_CALENDAR';
const GET_CALENDAR_SUCCESS = 'GET_CALENDAR_SUCCESS';
const GET_CALENDAR_FAILURE = 'GET_CALENDAR_FAILURE';

const logIn = (token: string) => ({ type: LOG_IN, payload: token });

const logOut = () => ({ type: LOG_OUT });

const getCalendar = () => ({ type: GET_CALENDAR });

const getCalendarSuccess = (calendarItems: ICalendarItem[]) => ({
  type: GET_CALENDAR_SUCCESS,
  payload: calendarItems,
});

const getCalendarFailure = (error: string) => ({
  type: GET_CALENDAR_FAILURE,
  payload: error,
});

export {
  LOG_IN,
  LOG_OUT,
  GET_CALENDAR,
  GET_CALENDAR_SUCCESS,
  GET_CALENDAR_FAILURE,
  logIn,
  logOut,
  getCalendar,
  getCalendarSuccess,
  getCalendarFailure,
};
