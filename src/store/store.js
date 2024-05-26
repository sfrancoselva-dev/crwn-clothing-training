import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducers } from './root-reducer';

import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-sagas';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const sagaMiddleware = createSagaMiddleware();

const middleWare = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);

const compose_redux_or_devtools = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = compose_redux_or_devtools(applyMiddleware(...middleWare));

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);


