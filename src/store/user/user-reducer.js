
import {USER_REDUCER_TYPE} from './user-type';
const INITIAL_STATE = {
    currentUser: null,
    loading: false,
    credential: {} 
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const {type,payload} = action;

    switch(type) {
        case USER_REDUCER_TYPE.GOOGLE_SIGN_IN_START: 
        case USER_REDUCER_TYPE.SIGN_IN_START:
        case USER_REDUCER_TYPE.SIGN_UP_START:
           return {
            ...state,
            loading: true,
            credential: payload
           }
        break;

        case USER_REDUCER_TYPE.SIGN_IN_SUCCESS:
        case USER_REDUCER_TYPE.SIGN_UP_SUCCESS:
        case USER_REDUCER_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                loading: false,
                currentUser: payload
            }
        break;

        case USER_REDUCER_TYPE.SIGN_IN_FAILED:
        case USER_REDUCER_TYPE.SIGN_UP_FAILED: 
           return {
             ...state,
             loading: false,
             currentUser: null
           }

          default:
           return state;
    }

}


