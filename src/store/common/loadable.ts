/* eslint no-param-reassign: "error" */
export interface Loadable {
  loading?: boolean;
  error?: Error;
}

export function requestLoadableReducer<S extends Loadable = Loadable>(
  state: S
): void {
  state.loading = true;
  state.error = undefined;
}

export function successLoadableReducer<S extends Loadable = Loadable>(
  state: S
): void {
  state.loading = false;
  state.error = undefined;
}

export function errorLoadableReducer<S extends Loadable = Loadable>(
  state: S,
  error: Error
): void {
  state.loading = false;
  state.error = error;
}
