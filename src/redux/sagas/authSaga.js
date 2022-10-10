import { call, put, takeLatest } from 'redux-saga/effects';

import {
  signupReceived,
  getRequestError,
  loginReceived,
} from '../actions/auth';
import { loginRequest, signupRequest } from '../../api/authApi';
import * as actionTypes from '../constants';

function* signupWorker({ payload }) {
  try {
    const data = yield call(signupRequest, payload);
    localStorage.setItem('token', data.token);
    yield put(signupReceived(data.user));
  } catch (error) {
    yield put(getRequestError(error.response.data));
  }
}

function* loginWorker({ payload }) {
  try {
    const data = yield call(loginRequest, payload);
    localStorage.setItem('token', data.token);
    yield put(loginReceived(data.user));
  } catch (error) {
    yield put(getRequestError(error.response.data));
  }
}

function* logoutWorker() {
  try {
    localStorage.clear('token');
  } catch (error) {
    yield put(getRequestError(error.response.data));
  }
}

function* authWatcher() {
  yield takeLatest(actionTypes.SIGNUP_REQUESTED, signupWorker);
  yield takeLatest(actionTypes.LOGIN_REQUESTED, loginWorker);
  yield takeLatest(actionTypes.LOGOUT_REQUESTED, logoutWorker);
}
export default authWatcher;
