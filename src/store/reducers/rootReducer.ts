import { combineReducers } from 'redux';
import { forecastReducer } from './forecastReducer/forecastReducer';
import { locationReducer } from './locationReducer/locationReducer';
import { calendarReducer } from './calendarReducer/calendarReducer';

const rootReducer = combineReducers({
  forecast: forecastReducer,
  location: locationReducer,
  calendar: calendarReducer,
});

export { rootReducer };
