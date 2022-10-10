import { all } from 'redux-saga/effects';

import authWatcher from './authSaga';
import newsWatcher from './newsSaga';

export default function* rootSaga() {
  yield all([
    newsWatcher(),
    authWatcher(),
  ]);
}
