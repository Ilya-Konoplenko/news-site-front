import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import api from '../../api/api';
import { newsReceived, getNewsError } from '../actions/news';
import * as actionTypes from '../constants';

function* getNewsWorker() {
  try {
    const { data } = yield api.get('/news');
    yield put(newsReceived(data));
  } catch (error) {
    yield put(getNewsError(error.message));
  }
}
function* newsWatcher() {
  yield takeLatest(actionTypes.NEWS_REQUESTED, getNewsWorker);
}
export default newsWatcher;
