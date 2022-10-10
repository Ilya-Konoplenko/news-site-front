import { createAction } from 'redux-actions';

import * as actionTypes from '../constants';

export const getLoginRequest = createAction(actionTypes.LOGIN_REQUESTED);
export const loginReceived = createAction(actionTypes.LOGIN_RECEIVED);
export const getLoginError = createAction(actionTypes.LOGIN_FAILED);

export const getSignupRequest = createAction(actionTypes.SIGNUP_REQUESTED);
export const signupReceived = createAction(actionTypes.SIGNUP_RECEIVED);
export const getSignupError = createAction(actionTypes.SIGNUP_FAILED);

export const getLogoutRequested = createAction(actionTypes.LOGOUT__REQUESTED);
