import { combineReducers } from '@reduxjs/toolkit';

import systemReducer from './system/systemStore';
import { calendarReducer } from './product_sort/reducers';
import { serviceReducer } from './product/reducers';
import { masterReducer } from './master/reducers';

const rootReducer = combineReducers({
  system: systemReducer,
  master: masterReducer,
  service: serviceReducer,
  calendar: calendarReducer,
});

export default rootReducer;
