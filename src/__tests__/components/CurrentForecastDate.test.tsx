import '@testing-library/jest-dom';
import { CurrentForecastDate } from '../../components/currentForecast/CurrentForecastDate';
import { renderProvider } from '../../helpers/renderProvider';

describe('current-forecast-date', () => {
  it('component`s data render', () => {
    const { getByTestId } = renderProvider(<CurrentForecastDate />);

    expect(getByTestId('date')).toBeTruthy();
    expect(getByTestId('weekday')).toBeTruthy();
    expect(getByTestId('time')).toBeTruthy();
  });
});
