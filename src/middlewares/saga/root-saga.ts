import masterRootSaga from './master/masterRootSaga';

export default function* rootSaga() {
  yield* masterRootSaga();
}
