import {
  MASTER_FETCH_REQUEST,
  MASTER_FETCH_SUCCESS,
  MASTER_FETCH_ERROR,
} from './types';
import { Master } from '../../domain/Master';

export function fetchCategoryRequest() {
  return {
    type: MASTER_FETCH_REQUEST,
  };
}
export function fetchCategorySuccess(data: Master[]) {
  return {
    type: MASTER_FETCH_SUCCESS,
    payload: data,
  };
}
export function fetchCategoryError(message: string) {
  return {
    type: MASTER_FETCH_ERROR,
    payload: message,
  };
}
