import { createAction } from "../../utils/reducer";
import {USER_REDUCER_TYPE} from './user-type'

export const setCurrentUser = (user) => {
    return createAction(USER_REDUCER_TYPE.SET_CURRENT_USER,user);
}

export const googleSignInStart = () => {
  return createAction(USER_REDUCER_TYPE.GOOGLE_SIGN_IN_START);
}

export const signInStart = (email, password) => {
  const credential = {email,password}
  return createAction(USER_REDUCER_TYPE.SIGN_IN_START,credential);
}

export const signInSuccess = (user) => {
  return createAction(USER_REDUCER_TYPE.SIGN_IN_SUCCESS,user);
}

export const signInFailed = (error) => {
  return createAction(USER_REDUCER_TYPE.SIGN_IN_FAILED,error);
}

export const signUpStart = (email,password,confirmPassword,displayName) => {
  return createAction(USER_REDUCER_TYPE.SIGN_UP_START, {email,password,confirmPassword,displayName });
}

export const signUpSuccess = (user) => {
  return createAction(USER_REDUCER_TYPE.SIGN_UP_SUCCESS, user);
}

export const signUpFailed = (err) => {
  return createAction(USER_REDUCER_TYPE.SIGN_UP_FAILED, err);
}