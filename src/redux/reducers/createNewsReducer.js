import { CREATE_NEWS_REQUESTED, CREATE_NEWS_RESPONSE, CREATE_NEWS_FAILED } from '../constants';

const initialState = {
  post: [],
  error: null,
};

export default function createNewsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_NEWS_REQUESTED:
      return {
        ...state,
        error: null,
      };
    case CREATE_NEWS_RESPONSE:
      return {
        ...state,
        post: action.payload,
        error: null,
      };
    case CREATE_NEWS_FAILED:
      return {
        ...state,
        post: [],
        error: action.payload,
      };
    default: return state;
  }
}
