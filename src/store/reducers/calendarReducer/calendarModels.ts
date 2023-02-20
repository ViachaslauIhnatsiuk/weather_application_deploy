import { ICalendarResponse, ICalendarItem } from '../../../models/api';

enum CalendarStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

interface ICalendarState {
  calendarItems: ICalendarItem[];
  token: string;
  status: string;
  error: string;
}

interface IAction {
  type: string;
  payload: ICalendarResponse;
}

export { CalendarStatus };
export type { ICalendarState, IAction };
