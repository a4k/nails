import {
  MASTER_FETCH_ERROR,
  MASTER_FETCH_REQUEST,
  MASTER_FETCH_SUCCESS,
  MastersState,
  MasterActionTypes,
} from './types';

const initialState: MastersState = {
  data: [],
  loading: false,
  errors: undefined,
};

export function masterReducer(
  state = initialState,
  action: MasterActionTypes
): MastersState {
  switch (action.type) {
    case MASTER_FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case MASTER_FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case MASTER_FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default:
      return state;
  }
}
