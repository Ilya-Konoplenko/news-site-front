import {
  SIGNUP_REQUESTED,
  SIGNUP_RECEIVED,
  LOGIN_REQUESTED,
  LOGIN_RECEIVED,
  LOGOUT_REQUESTED,
  REQUEST_VERIFY_USER_FAILED,
  REQUEST_LOGIN_FAILED,
  REQUEST_SIGNUP_FAILED,
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
    case LOGIN_REQUESTED:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    case LOGIN_RECEIVED:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case LOGOUT_REQUESTED:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        error: null,
      };
    case REQUEST_VERIFY_USER_FAILED || REQUEST_LOGIN_FAILED || REQUEST_SIGNUP_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        error: action.payload,
      };
    default: return state;
  }
}
