import { all } from 'redux-saga/effects';
import news from './newsSaga';

export default function* rootSaga() {
  yield all([
    news(),
  ]);
}
