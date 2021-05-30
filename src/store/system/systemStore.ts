import { createSlice } from '@reduxjs/toolkit';
import { noChangeReducer } from '../common/common';

interface SystemState {
  loggedIn: boolean;
  session: string;
  username: string;
}

const systemInitialState: SystemState = {
  loggedIn: false,
  session: '',
  username: '',
};

export const systemStore = createSlice({
  name: 'System',
  initialState: systemInitialState,
  reducers: {
    getUserInfo: noChangeReducer,
  },
});

export default systemStore.reducer;
