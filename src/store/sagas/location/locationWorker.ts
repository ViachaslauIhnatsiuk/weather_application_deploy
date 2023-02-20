import { call, delay, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { fetchCities } from '../../../api/city';
import { getCityByIP } from '../../../api/location';
import {
  getCitiesFailure,
  getCitiesSuccess,
  getLocationFailure,
  getLocationSuccess,
  setCurrentCity,
  setSearchCity,
} from '../../actions/locationActions';
import { getForecastSuccess } from '../../actions/forecastActions';
import { fetchForecast } from '../../../api/forecast';
import { CITY_SEARCH_DELAY } from '../../../constants/store';

function* locationWorker(): SagaIterator {
  try {
    const city = yield call(getCityByIP);
    yield put(getLocationSuccess(city));

    const forecast = yield call(fetchForecast, city);
    yield put(getForecastSuccess(forecast));
    yield put(setCurrentCity(city));
    yield put(setSearchCity(city));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getLocationFailure(error.message));
    }
  }
}

function* citiesWorker({ payload }: ReturnType<typeof setCurrentCity>): SagaIterator {
  yield delay(CITY_SEARCH_DELAY);

  try {
    const cities = yield call(fetchCities, payload);
    yield put(getCitiesSuccess(cities));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getCitiesFailure(error.message));
    }
  }
}

export { locationWorker, citiesWorker };
