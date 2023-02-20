import { call, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { fetchForecast } from '../../../api/forecast';
import { selectLocation } from '../../selectors';
import { getForecastFailure, getForecastSuccess } from '../../actions/forecastActions';

function* forecastWorker(): SagaIterator {
  const { currentCity } = yield select(selectLocation);

  try {
    const forecast = yield call(fetchForecast, currentCity);
    yield put(getForecastSuccess(forecast));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getForecastFailure(error.message));
    }
  }
}

export { forecastWorker };
