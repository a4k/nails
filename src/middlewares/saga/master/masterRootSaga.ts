import { takeEvery } from 'typed-redux-saga';
import { masterStore } from '../../../store/master/masterStore';
import { loadMasterListSaga } from './loadMasterListSaga';
import { loadMasterSaga } from './loadMasterSaga';

export default function* masterRootSaga() {
  yield* takeEvery(masterStore.actions.getMasterList.type, loadMasterListSaga);
  yield* takeEvery(masterStore.actions.getMaster.type, loadMasterSaga);
}
