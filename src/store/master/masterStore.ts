import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Master } from '../../domain/Master';
import {
  errorLoadableReducer,
  Loadable,
  requestLoadableReducer,
} from '../common/loadable';
import { noChangeReducer } from '../common/common';

interface MasterState extends Loadable {
  masters: Master[];
  master?: Master;
  masterId?: number;
}

const masterInitialState: MasterState = {
  masters: [],
};

export const masterStore = createSlice({
  name: 'Master',
  initialState: masterInitialState,
  reducers: {
    getMasterList: noChangeReducer,
    getMaster: (
      state: MasterState,
      { payload }: PayloadAction<number>
    ): MasterState => {
      return { ...state, masterId: payload };
    },
    loadMasterRequest: (_state: MasterState): MasterState => {
      const newState = { ...masterInitialState };
      requestLoadableReducer(newState);
      return newState;
    },
    loadMasterListSuccess: (
      state: MasterState,
      { payload }: PayloadAction<Master[]>
    ): MasterState => {
      return { ...state, masters: payload };
    },
    loadMasterError: (
      _state: MasterState,
      action: PayloadAction<Error>
    ): MasterState => {
      const newState = { ...masterInitialState };
      errorLoadableReducer(newState, action.payload);
      return newState;
    },
    loadMasterSuccess: (
      state: MasterState,
      { payload }: PayloadAction<Master>
    ): MasterState => {
      return { ...state, master: payload };
    },
  },
});

export default masterStore.reducer;
