import { call, put } from 'typed-redux-saga';
import { callApi } from '../../../utils/api';
import { API_URL } from '../../../config';
import { masterStore } from '../../../store/master/masterStore';

export function* loadMasterListSaga() {
  yield* put(masterStore.actions.loadMasterRequest());

  try {
    const res = yield* call(callApi, 'get', API_URL, '/masters');

    yield* put(masterStore.actions.loadMasterListSuccess(res));
  } catch (err) {
    yield* put(masterStore.actions.loadMasterError(err));
  }
}
