import { call, put, takeLatest } from 'redux-saga/effects';

import { userDataReceived, getUserDataFailed } from '../actions/user';
import getUserData from '../../api/userApi';
import * as actionTypes from '../constants';

function* getUserDataWorker({ payload }) {
  try {
    const user = yield call(getUserData, payload);
    yield put(userDataReceived(user));
  } catch (error) {
    yield put(getUserDataFailed(error.response.data));
  }
}
function* userWatcher() {
  yield takeLatest(actionTypes.USER_DATA_REQUEST, getUserDataWorker);
}
export default userWatcher;
