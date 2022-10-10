import { combineReducers } from 'redux';

import authReducer from './authReducer';
import newsReducer from './newsReducer';

export default combineReducers({
  news: newsReducer,
  auth: authReducer,
});
