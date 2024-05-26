
import {PRODUCTS_REDUCER_TYPES} from './products.types';

const PRODUCTS_INITIAL_STATE = {
    products: [],
    loading: false,
    error: null
};


export const productsReducer = (state = PRODUCTS_INITIAL_STATE, action) => {

    const {type,payload} = action;

    switch(type) {
        case PRODUCTS_REDUCER_TYPES.FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true
            }
            break;

        case PRODUCTS_REDUCER_TYPES.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: payload,
                loading: false
            }
            break;
        case PRODUCTS_REDUCER_TYPES.FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
            break; 

            default:
                return state;
    }


}