import { all } from 'redux-saga/effects';

import newsWatcher from './newsSaga';

export default function* rootSaga() {
  yield all([
    newsWatcher(),
  ]);
}
