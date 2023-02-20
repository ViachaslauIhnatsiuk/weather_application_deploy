import { all, fork } from 'redux-saga/effects';
import { forecastWatcher } from './forecast/forecastWatcher';
import { locationWatcher } from './location/locationWatcher';
import { calendarWatcher } from './calendar/calendarWatcher';

export function* rootSaga() {
  yield all([fork(forecastWatcher), fork(locationWatcher), fork(calendarWatcher)]);
}
