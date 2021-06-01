import { combineReducers } from '@reduxjs/toolkit';

import systemReducer from './system/systemStore';
import masterReducer from './master/masterStore';

const rootReducer = combineReducers({
  system: systemReducer,
  master: masterReducer,
});

export default rootReducer;
