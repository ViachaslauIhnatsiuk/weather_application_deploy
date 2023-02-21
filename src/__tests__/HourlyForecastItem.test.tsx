import '@testing-library/jest-dom';
import { renderProvider } from '../helpers/renderProvider';
import { fetchForecast } from '../api/forecast';
import { HourlyForecastItem } from '../components/hourlyForecast/HourlyForecastItem';
import { mockHour } from '../constants/mockData';

const assetsFetchMock = () => Promise.resolve({ json: async () => mockHour } as Response);

describe('hourly-forecast-item', () => {
  let fetchMock: jest.SpyInstance;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(assetsFetchMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('component renders with right values', () => {
    const { getByText } = renderProvider(<HourlyForecastItem hour={mockHour} />);
    expect(getByText('2°C')).toBeInTheDocument();
  });

  it('fetch function has been called', () => {
    fetchForecast('London');
    const { getByTestId } = renderProvider(<HourlyForecastItem hour={mockHour} />);

    expect(fetchMock).toHaveBeenCalled();
    expect(getByTestId('hourly-forecast-item')).toBeInTheDocument();
  });

  it('component snapshot', () => {
    const component = renderProvider(<HourlyForecastItem hour={mockHour} />);
    expect(component).toMatchSnapshot();
  });
});
