import {
  CalendarState,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_ERROR,
  ProductActionTypes,
} from './types';

const initialState: CalendarState = {
  data: [],
  errors: undefined,
  loading: false,
};

export function serviceReducer(
  state = initialState,
  action: ProductActionTypes
): CalendarState {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case PRODUCT_FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case PRODUCT_FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default:
      return state;
  }
}
