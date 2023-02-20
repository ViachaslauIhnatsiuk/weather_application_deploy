import { IForecastResponse } from '../../../models/api';

enum ForecastStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

interface IForecastState {
  forecast: IForecastResponse | null;
  status: string;
  error: string;
}

interface IAction {
  type: string;
  payload: IForecastResponse;
}

export { ForecastStatus };
export type { IForecastState, IAction };
