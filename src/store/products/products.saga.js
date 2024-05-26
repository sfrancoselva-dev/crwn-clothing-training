import { takeLatest, call, all, put } from "redux-saga/effects";
import {PRODUCTS_REDUCER_TYPES} from './products.types';
import { getCategoriesAndDocuments } from "../../utils/firebase";
import {fetchProductSuccess,fetchProductFailed } from './products.action';


function* fetchProductsAsync() {
    try {
        const products = yield call(getCategoriesAndDocuments);
        yield put(fetchProductSuccess(products));

    } 
    catch(err) {
        yield put(fetchProductFailed(err));
    }
}


function* onStartFetchingProducts() {
    yield takeLatest(PRODUCTS_REDUCER_TYPES.FETCH_PRODUCTS_START, fetchProductsAsync);
}


export function* productsSaga() {
    yield all([call(onStartFetchingProducts)])
}





