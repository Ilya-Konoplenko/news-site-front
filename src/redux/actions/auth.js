import { createAction } from 'redux-actions';

import * as actionTypes from '../constants';

export const getLoginRequest = createAction(actionTypes.LOGIN_REQUESTED);
export const loginReceived = createAction(actionTypes.LOGIN_RECEIVED);
export const getSignupRequest = createAction(actionTypes.SIGNUP_REQUESTED);
export const signupReceived = createAction(actionTypes.SIGNUP_RECEIVED);
export const getLogoutRequested = createAction(actionTypes.LOGOUT_REQUESTED);
export const getRequestError = createAction(actionTypes.REQUEST_FAILED);
