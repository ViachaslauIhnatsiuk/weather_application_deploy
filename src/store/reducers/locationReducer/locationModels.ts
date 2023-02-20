import { ICity } from '../../../models/api';

enum LocationStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

interface ILocationState {
  cities: ICity[];
  currentCity: string;
  searchCity: string;
  status: string;
  error: string;
}

interface IAction {
  type: string;
  payload?: ICity | string;
}

export { LocationStatus };
export type { ILocationState, IAction };
