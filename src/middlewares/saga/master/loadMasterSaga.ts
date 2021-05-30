import { call, put } from 'typed-redux-saga';
import { callApi } from '../../../utils/api';
import { API_URL } from '../../../config';
import { masterStore } from '../../../store/master/masterStore';

export function* loadMasterSaga() {
  yield* put(masterStore.actions.loadMasterRequest());

  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield* call(callApi, 'get', API_URL, '/masters');

    yield* put(masterStore.actions.loadMasterSuccess(res));
  } catch (err) {
    yield* put(masterStore.actions.loadMasterError(err));
  }
}
