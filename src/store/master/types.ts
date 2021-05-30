import { Master } from '../../domain/Master';

export interface MastersState {
  data: Master[];
  loading: boolean;
  errors?: string;
}

export const MASTER_FETCH_REQUEST = 'MASTER_FETCH_REQUEST';
export const MASTER_FETCH_SUCCESS = 'MASTER_FETCH_SUCCESS';
export const MASTER_FETCH_ERROR = 'MASTER_FETCH_ERROR';

interface MasterFetchRequestAction {
  type: typeof MASTER_FETCH_REQUEST;
}
interface MasterFetchSuccessAction {
  type: typeof MASTER_FETCH_SUCCESS;
  payload: Master[];
}
interface MasterFetchErrorAction {
  type: typeof MASTER_FETCH_ERROR;
  payload: string;
}

export type MasterActionTypes =
  | MasterFetchRequestAction
  | MasterFetchSuccessAction
  | MasterFetchErrorAction;
