import {
  ServicesState,
  SEND_PRODUCT_SORT,
  ProductSortActionTypes,
} from './types';

const initItems = [
  { key: 'popularity', value: 'Popularity' },
  { key: 'price', value: 'Price' },
  { key: 'name', value: 'Name' },
];
const initialState: ServicesState = {
  items: initItems,
};

export function calendarReducer(
  state = initialState,
  action: ProductSortActionTypes
): ServicesState {
  switch (action.type) {
    case SEND_PRODUCT_SORT:
      return {
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}
