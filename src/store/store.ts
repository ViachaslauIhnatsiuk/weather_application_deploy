import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { useDispatch } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';
import { rootSaga } from './sagas/rootSaga';
import { IForecastState } from './reducers/forecastReducer/forecastModels';
import { ILocationState } from './reducers/locationReducer/locationModels';
import { ICalendarState } from './reducers/calendarReducer/calendarModels';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = { key: 'root', storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

interface RootState {
  forecast: IForecastState;
  location: ILocationState;
  calendar: ICalendarState;
}

type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();

export type { RootState, AppDispatch };
export { store, persistor, useAppDispatch };
