import {createAction} from '../../utils/reducer';
import { PRODUCTS_REDUCER_TYPES } from './products.types';

export const fetchProductsStart = () => {
    return createAction(PRODUCTS_REDUCER_TYPES.FETCH_PRODUCTS_START);
}

export const fetchProductSuccess = (products) => {
  return createAction(PRODUCTS_REDUCER_TYPES.FETCH_PRODUCTS_SUCCESS, products);
}

export const fetchProductFailed = (error) => {
    return createAction(PRODUCTS_REDUCER_TYPES.FETCH_PRODUCTS_FAILED, error);
}


