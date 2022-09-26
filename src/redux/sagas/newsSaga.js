import { put, takeLatest } from 'redux-saga/effects';
import { NEWS_REQUESTED } from '../constants';
import api from '../../api/api';
import { newsReceived, getNewsError } from '../actions/news';

function* getNewsWorker() {
  try {
    const { data } = yield api.get('/news');
    yield put(newsReceived(data));
  } catch (error) {
    yield put(getNewsError(error.message));
  }
}
function* newsWatcher() {
  yield takeLatest(NEWS_REQUESTED, getNewsWorker);
}
export default newsWatcher;
