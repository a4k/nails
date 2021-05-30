import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Master } from '../../domain/Master';
import {
  errorLoadableReducer,
  Loadable,
  requestLoadableReducer,
} from '../common/loadable';
import { noChangeReducer } from '../common/common';

interface MasterState extends Loadable {
  data: Master[];
}

const masterInitialState: MasterState = {
  data: [],
};

export const masterStore = createSlice({
  name: 'System',
  initialState: masterInitialState,
  reducers: {
    refresh: noChangeReducer,
    loadMasterRequest: (_state: MasterState): MasterState => {
      const newState = { ...masterInitialState };
      requestLoadableReducer(newState);
      return newState;
    },
    loadMasterSuccess: (
      state: MasterState,
      { payload }: PayloadAction<Master[]>
    ): MasterState => {
      return { ...state, data: payload };
    },
    loadMasterError: (
      _state: MasterState,
      action: PayloadAction<Error>
    ): MasterState => {
      const newState = { ...masterInitialState };
      errorLoadableReducer(newState, action.payload);
      return newState;
    },
  },
});

export default masterStore.reducer;