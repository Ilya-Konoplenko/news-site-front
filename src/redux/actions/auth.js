import { createAction } from 'redux-actions';

import * as actionTypes from '../constants';

export const getLoginRequest = createAction(actionTypes.LOGIN_REQUESTED);
export const loginReceived = createAction(actionTypes.LOGIN_RECEIVED);
export const getRequestLoginError = createAction(actionTypes.REQUEST_LOGIN_FAILED);
export const getSignupRequest = createAction(actionTypes.SIGNUP_REQUESTED);
export const signupReceived = createAction(actionTypes.SIGNUP_RECEIVED);
export const getRequestSignupError = createAction(actionTypes.REQUEST_SIGNUP_FAILED);
export const getLogoutRequested = createAction(actionTypes.LOGOUT_REQUESTED);
export const getRequestError = createAction(actionTypes.REQUEST_FAILED);
export const verifyUserByToken = createAction(actionTypes.REQUEST_VERIFY_USER);
export const getVerifyUserByTokenError = createAction(actionTypes.REQUEST_VERIFY_USER_FAILED);
