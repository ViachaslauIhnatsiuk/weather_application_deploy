import { runSaga } from 'redux-saga';
import { AnyAction } from 'redux';
import { getCitiesSuccess, setCurrentCity } from '../../../store/actions/locationActions';
import { citiesWorker } from '../../../store/sagas/location/locationWorker';

const mockCities = [
  {
    id: 1,
    name: 'Minsk',
    region: 'Minsk',
    country: 'Belarus',
    lat: 54,
    lon: 53,
    url: 'url',
  },
];

const assetsFetchMock = () =>
  Promise.resolve({ json: async () => mockCities } as Response);

describe('location saga', () => {
  let fetchMock: jest.SpyInstance;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(assetsFetchMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should set recieved location', async () => {
    const dispatched: AnyAction[] = [];

    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
        getState: () => ({
          location: {
            currentCity: 'Minsk',
          },
        }),
      },
      citiesWorker,
      setCurrentCity('Minsk'),
    ).toPromise();

    expect(fetchMock).toHaveBeenCalled();
    expect(dispatched[0]).toEqual(getCitiesSuccess(mockCities));
  });
});
