import { takeEvery } from 'redux-saga/effects';
import { forecastWorker } from './forecastWorker';
import { GET_FORECAST } from '../../actions/forecastActions';

function* forecastWatcher() {
  yield takeEvery(GET_FORECAST, forecastWorker);
}

export { forecastWatcher };
