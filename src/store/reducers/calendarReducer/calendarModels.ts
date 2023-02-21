import { ICalendarItem } from '../../../models/api';

enum CalendarStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

interface ICalendarState {
  calendarItems: ICalendarItem[];
  dateRange: string[];
  token: string;
  status: string;
  error: string;
}

interface IAction {
  type: string;
  payload?: ICalendarItem[] | string[] | string;
}

export { CalendarStatus };
export type { ICalendarState, IAction };
