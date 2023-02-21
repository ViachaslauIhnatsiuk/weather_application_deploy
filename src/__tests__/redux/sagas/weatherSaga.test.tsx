import { runSaga } from 'redux-saga';
import { AnyAction } from 'redux';
import { mockForecast } from '../../../constants/mockData';
import { getForecastSuccess } from '../../../store/actions/forecastActions';
import { forecastWorker } from '../../../store/sagas/forecast/forecastWorker';

const assetsFetchMock = () =>
  Promise.resolve({ json: async () => mockForecast } as Response);

describe('forecast saga', () => {
  let fetchMock: jest.SpyInstance;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(assetsFetchMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should set recieved forecast', async () => {
    const dispatched: AnyAction[] = [];

    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
        getState: () => ({
          forecast: null,
          location: {
            currentCity: 'Minsk',
          },
        }),
      },
      forecastWorker,
    ).toPromise();

    expect(fetchMock).toHaveBeenCalled();
    expect(dispatched[0]).toEqual(getForecastSuccess(mockForecast));
  });
});
