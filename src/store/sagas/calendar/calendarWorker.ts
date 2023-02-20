import { call, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { fetchCalendar } from '../../../api/calendar';
import { selectCalendarToken } from '../../selectors';
import { ICalendarResponse } from '../../../models/api';
import {
  getCalendarFailure,
  getCalendarSuccess,
  logOut,
} from '../../actions/calendarActions';

function* calendarWorker(): SagaIterator {
  const token = yield select(selectCalendarToken);

  if (token) {
    try {
      const response: ICalendarResponse = yield call(fetchCalendar, token, new Date());
      const calendarItems = response.items;

      yield put(getCalendarSuccess(calendarItems));
    } catch (error: unknown) {
      if (error instanceof Error) {
        yield put(getCalendarFailure(error.message));
      }
    }
  } else {
    yield put(logOut());
  }
}

export { calendarWorker };
