import { runSaga } from 'redux-saga';
import { AnyAction } from 'redux';
import { mockCalendar, mockEvent } from '../../../constants/mockData';
import { getCalendarSuccess } from '../../../store/actions/calendarActions';
import { calendarWorker } from '../../../store/sagas/calendar/calendarWorker';
import { getISODayEnd, getISODayStart } from '../../../helpers/date';

const range = [getISODayStart(), getISODayEnd()];

const assetsFetchMock = () =>
  Promise.resolve({ json: async () => mockCalendar } as Response);

describe('calendar saga', () => {
  let fetchMock: jest.SpyInstance;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(assetsFetchMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should set recieved calendar events', async () => {
    const dispatched: AnyAction[] = [];

    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
        getState: () => ({
          calendar: {
            token: 'token',
            dateRange: range,
          },
        }),
      },
      calendarWorker,
    ).toPromise();

    expect(fetchMock).toHaveBeenCalled();
    expect(dispatched[0]).toEqual(getCalendarSuccess([mockEvent]));
  });
});
