import {takeLatest, call, all, put} from 'redux-saga/effects';
import { USER_REDUCER_TYPE } from './user-type';
import {signInWithGooglePopup, signInWithEmailAndPasswordCustom, createUserWithEmailAndPasswordFromAuth,createFbDocFromAuth} from '../../utils/firebase';
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed } from './user.action';


function* googleSignInSaga() {
    try {
        const userAuth = yield call(signInWithGooglePopup);
        if(!userAuth) return;

        yield put(signInSuccess(userAuth));

     } catch(err) {
         yield put(signInFailed(err));
     }
}

function* signInSaga({payload: {email, password}}) {
    // sign-in with email and password

    try {
      const response = yield call(signInWithEmailAndPasswordCustom,email,password);
      if(!response) return;

      yield put(signInSuccess(response));

    } catch(err) {
      if(err.code === 'auth/invalid-credential') {
        alert('Invalid Email / Password');
        yield put(signInFailed(err));
      }
    }   
}

function* signUpSaga({payload: {email,password,confirmPassword, displayName}}) {
    if(password !== confirmPassword) {
        console.error('Password doesn\'t match.');
        return;
     }

     try {
        const {user} = yield call(createUserWithEmailAndPasswordFromAuth,email,password);
        if(user) {
            user.displayName = displayName;
            yield call(createFbDocFromAuth,user);
            yield put(signUpSuccess(user));
        }
     } catch(err) {
        yield put(signUpFailed(err));
     }
}


function* onGoogleSignIn() {
    yield takeLatest(USER_REDUCER_TYPE.GOOGLE_SIGN_IN_START, googleSignInSaga);
}

function* onSignIn() {
    yield takeLatest(USER_REDUCER_TYPE.SIGN_IN_START, signInSaga);
}

function* onSignup() {
    yield takeLatest(USER_REDUCER_TYPE.SIGN_UP_START, signUpSaga);
}


export function* userSaga() {
    yield all([call(onGoogleSignIn), call(onSignIn), call(onSignup)])
}