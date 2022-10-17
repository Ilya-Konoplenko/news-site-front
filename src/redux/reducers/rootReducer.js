import { combineReducers } from 'redux';

import authReducer from './authReducer';
import newsReducer from './newsReducer';
import userReducer from './userReducer';

export default combineReducers({
  news: newsReducer,
  auth: authReducer,
  user: userReducer,
});
