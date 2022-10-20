import { combineReducers } from 'redux';

import authReducer from './authReducer';
import newsReducer from './newsReducer';
import userReducer from './userReducer';
import createNewsReducer from './createNewsReducer';

export default combineReducers({
  news: newsReducer,
  auth: authReducer,
  user: userReducer,
  post: createNewsReducer,
});
