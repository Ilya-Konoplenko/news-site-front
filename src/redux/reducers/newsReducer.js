import { NEWS_REQUESTED, NEWS_RECEIVED, NEWS_ERROR } from '../constants';

const initialState = {
  items: [],
  fetching: false,
  error: null,
};

export default function newsReducer(action, state = initialState) {
  switch (action.type) {
    case NEWS_REQUESTED:
      return {
        ...state, fetching: true, items: [], error: null,
      };
    case NEWS_RECEIVED:
      return {
        ...state, fetching: false, items: action.payload, error: null,
      };
    case NEWS_ERROR:
      return {
        ...state, fetching: false, items: [], error: action.error,
      };
    default: return state;
  }
}
