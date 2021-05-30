import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootReducer from './rootReducer';
import rootSaga from '../middlewares/saga/root-saga';

export function createAppStore() {
  const sagaMiddleware = createSagaMiddleware();

  const appStore = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return appStore;
}

// Store object type
export type AppState = ReturnType<typeof rootReducer>;
// Dispatch function type
export type AppDispatch = ReturnType<typeof createAppStore>['dispatch'];

// Typed hooks
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Get initial store state (for test purposes)
export const getInitialStore = (): AppState =>
  rootReducer(undefined, { type: 'Fake action' });
