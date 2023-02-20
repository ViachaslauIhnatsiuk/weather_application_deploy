import { takeEvery } from 'redux-saga/effects';
import { calendarWorker } from './calendarWorker';
import { GET_CALENDAR } from '../../actions/calendarActions';

function* calendarWatcher() {
  yield takeEvery(GET_CALENDAR, calendarWorker);
}

export { calendarWatcher };
