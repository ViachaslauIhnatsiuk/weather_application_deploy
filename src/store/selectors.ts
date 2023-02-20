import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const selectForecast = (state: RootState) => state.forecast;
const selectAirQuality = (state: RootState) =>
  state.forecast.forecast?.current.air_quality;
const selectCurrentForecast = (state: RootState) => state.forecast.forecast?.current;
const selectForecastCity = (state: RootState) => state.forecast.forecast?.location.name;
const selectDailyForecast = (state: RootState) =>
  state.forecast.forecast?.forecast.forecastday;

const selectLocation = (state: RootState) => state.location;

const selectCalendar = (state: RootState) => state.calendar;
const selectDateRange = (state: RootState) => state.calendar.dateRange;
const selectCalendarToken = (state: RootState) => state.calendar.token;

export {
  useAppSelector,
  selectForecast,
  selectAirQuality,
  selectCurrentForecast,
  selectForecastCity,
  selectDailyForecast,
  selectLocation,
  selectCalendar,
  selectDateRange,
  selectCalendarToken,
};
