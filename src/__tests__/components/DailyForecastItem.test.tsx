import '@testing-library/jest-dom';
import { fetchForecast } from '../../api/forecast';
import { renderProvider } from '../../helpers/renderProvider';
import { DailyForecastItem } from '../../components/dailyForecast/DailyForecastItem';
import { mockDay } from '../../constants/mockData';

const assetsFetchMock = () => Promise.resolve({ json: async () => mockDay } as Response);

describe('daily-forecast-item', () => {
  let fetchMock: jest.SpyInstance;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(assetsFetchMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('component renders', () => {
    const { getByTestId } = renderProvider(<DailyForecastItem day={mockDay} />);
    expect(getByTestId('daily-forecast-item')).toBeInTheDocument();
  });

  it('fetch function has been called', () => {
    fetchForecast('London');
    const { getByTestId } = renderProvider(<DailyForecastItem day={mockDay} />);

    expect(fetchMock).toHaveBeenCalled();
    expect(getByTestId('daily-forecast-item')).toBeInTheDocument();
  });

  it('component snapshot', () => {
    const component = renderProvider(<DailyForecastItem day={mockDay} />);
    expect(component).toMatchSnapshot();
  });
});
