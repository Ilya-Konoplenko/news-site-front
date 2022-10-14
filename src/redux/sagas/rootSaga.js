import { all } from 'redux-saga/effects';

import authWatcher from './authSaga';
import newsWatcher from './newsSaga';
import userWatcher from './userSaga';

export default function* rootSaga() {
  yield all([
    newsWatcher(),
    authWatcher(),
    userWatcher(),
  ]);
}
