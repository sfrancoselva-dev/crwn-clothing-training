export const customLoggerMiddleware = (store) => (next) => (action) => {

    if(!action.type) {
        return next(action);
    }

    console.log('before: ' ,store.getState());
    console.log('action: ', action);
    next(action);
    console.log('after: ', store.getState());
}