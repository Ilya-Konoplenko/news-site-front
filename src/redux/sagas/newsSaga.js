import { call, put, takeLatest } from 'redux-saga/effects';

import { newsReceived, getNewsError } from '../actions/news';
import getAllNews from '../../api/newsApi';
import * as actionTypes from '../constants';

function* getNewsWorker() {
  try {
    const news = yield call(getAllNews);
    yield put(newsReceived(news));
  } catch (error) {
    yield put(getNewsError(error.message));
  }
}
function* newsWatcher() {
  yield takeLatest(actionTypes.NEWS_REQUESTED, getNewsWorker);
}
export default newsWatcher;
