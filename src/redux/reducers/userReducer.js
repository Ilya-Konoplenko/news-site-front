import { USER_DATA_FAILED, USER_DATA_RECEIVED, USER_DATA_REQUESTED } from '../constants';

const initialState = {
  user: {},
  error: null,
};

export default function userReducer(state = initialState, action = {}) {
  console.log(action.type);
  switch (action.type) {
    case USER_DATA_REQUESTED:
      return {
        ...state,
        error: null,
      };
    case USER_DATA_RECEIVED:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case USER_DATA_FAILED:
      return {
        ...state,
        user: {},
        error: action.payload,
      };
    default: return state;
  }
}
