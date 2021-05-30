import { takeEvery } from 'typed-redux-saga';
import { masterStore } from '../../../store/master/masterStore';
import { loadMasterSaga } from './loadMasterSaga';

export default function* masterRootSaga() {
  yield* takeEvery(masterStore.actions.refresh.type, loadMasterSaga);
}
