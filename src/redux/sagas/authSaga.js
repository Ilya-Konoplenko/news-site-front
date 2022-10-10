import { call, put, takeLatest } from 'redux-saga/effects';

import {
  signupReceived,
  getSignupError,
  loginReceived,
  getLoginError,
} from '../actions/auth';
import { loginRequest, signupRequest } from '../../api/authApi';
import * as actionTypes from '../constants';

function* authWorker({ type, payload }) {
  if (type === actionTypes.SIGNUP_REQUESTED) {
    try {
      const data = yield call(signupRequest, payload);
      localStorage.setItem('token', data.token);
      yield put(signupReceived(data.user));
    } catch (error) {
      yield put(getSignupError(error.response.data));
    }
  } else if (type === actionTypes.LOGIN_REQUESTED) {
    try {
      const data = yield call(loginRequest, payload);
      localStorage.setItem('token', data.token);
      yield put(loginReceived(data.user));
    } catch (error) {
      yield put(getLoginError(error.response.data));
    }
  } else if (type === actionTypes.LOGOUT__REQUESTED) {
    try {
      localStorage.clear('token');
    } catch (error) {
      yield put(getLoginError(error.response.data));
    }
  }
}

function* authWatcher() {
  yield takeLatest(actionTypes.SIGNUP_REQUESTED, authWorker);
  yield takeLatest(actionTypes.LOGIN_REQUESTED, authWorker);
  yield takeLatest(actionTypes.LOGOUT__REQUESTED, authWorker);
}
export default authWatcher;
