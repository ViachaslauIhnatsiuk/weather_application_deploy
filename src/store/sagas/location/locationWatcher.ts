import { takeLeading, takeLatest } from 'redux-saga/effects';
import { GET_LOCATION, SET_SEARCH_CITY } from '../../actions/locationActions';
import { citiesWorker, locationWorker } from './locationWorker';

function* locationWatcher() {
  yield takeLeading(GET_LOCATION, locationWorker);
  yield takeLatest(SET_SEARCH_CITY, citiesWorker);
}

export { locationWatcher };
