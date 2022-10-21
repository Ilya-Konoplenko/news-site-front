import { call, put, takeLatest } from 'redux-saga/effects';

import {
  newsReceived,
  getNewsError,
  createNewsResponse,
  getCreateNewsError,
} from '../actions/news';
import { getAllNews, postNews } from '../../api/newsApi';
import * as actionTypes from '../constants';

function* getNewsWorker() {
  try {
    const news = yield call(getAllNews);
    yield put(newsReceived(news));
  } catch (error) {
    yield put(getNewsError(error.message));
  }
}

function* postNewsWorker({ payload }) {
  const { values, selectedImage } = payload;
  const form = new FormData();
  form.append('file', selectedImage);
  const keys = Object.keys(values);
  keys.forEach((key) => {
    form.append(key, values[key]);
  });
  try {
    const post = yield call(postNews, form);
    yield put(createNewsResponse(post));
  } catch (error) {
    yield put(getCreateNewsError(error.response.data));
  }
}

function* newsWatcher() {
  yield takeLatest(actionTypes.NEWS_REQUESTED, getNewsWorker);
  yield takeLatest(actionTypes.CREATE_NEWS_REQUESTED, postNewsWorker);
}
export default newsWatcher;
