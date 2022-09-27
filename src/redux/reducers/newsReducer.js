import * as actionTypes from '../constants';

const initialState = {
  items: [],
  fetching: false,
  error: null,
};

export default function newsReducer(state = initialState, action = {}) {
  console.log(action.payload);
  switch (action) {
    case actionTypes.NEWS_REQUESTED:
      return {
        ...state, fetching: true, items: [], error: null,
      };
    case actionTypes.NEWS_RECEIVED:
      return {
        ...state, fetching: false, items: action.payload, error: null,
      };
    case actionTypes.NEWS_ERROR:
      return {
        ...state, fetching: false, items: [], error: action.error,
      };
    default: return state;
  }
}
