import { call, put, select } from 'typed-redux-saga';
import { callApi } from '../../../utils/api';
import { API_URL } from '../../../config';
import { masterStore } from '../../../store/master/masterStore';
import { AppState } from '../../../store/appStore';

export function* loadMasterSaga() {
  const { masterId } = yield* select((state: AppState) => state.master);

  if (masterId) {
    yield* put(masterStore.actions.loadMasterRequest());

    try {
      const res = yield* call(callApi, 'get', API_URL, `/masters/${masterId}`);

      yield* put(masterStore.actions.loadMasterSuccess(res));
    } catch (err) {
      yield* put(masterStore.actions.loadMasterError(err));
    }
  }
}
