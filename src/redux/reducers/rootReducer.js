import { combineReducers } from 'redux';
import newsReducer from './newsReducer';

export default function rootReducer() {
  combineReducers({
    app: newsReducer,
  });
}