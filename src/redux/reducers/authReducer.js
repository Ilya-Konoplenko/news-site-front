import {
  SIGNUP_REQUESTED,
  SIGNUP_RECEIVED,
  SIGNUP_FAILED,
  LOGIN_REQUESTED,
  LOGIN_RECEIVED,
  LOGIN_FAILED,
  LOGOUT__REQUESTED,
} from '../constants';

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem('token')),
  user: {},
  error: null,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SIGNUP_REQUESTED:
      return {
        ...state,
        isLoggedIn: false,
      };
    case SIGNUP_RECEIVED:
      return {
        ...state,
        isLoggedIn: true,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: [],
        error: action.payload,
      };
    case LOGIN_REQUESTED:
      return {
        ...state,
        isLoggedIn: false,
        user: [],
      };
    case LOGIN_RECEIVED:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: [],
        error: action.payload,
      };
    case LOGOUT__REQUESTED:
      return {
        ...state,
        isLoggedIn: false,
        user: [],
        error: null,
      };
    default: return state;
  }
}
