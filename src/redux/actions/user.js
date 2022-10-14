import { createAction } from 'redux-actions';

import * as actionTypes from '../constants';

export const getUserDataRequest = createAction(actionTypes.USER_DATA_REQUEST);
export const userDataReceived = createAction(actionTypes.USER_DATA_RECEIVED);
export const getUserDataFailed = createAction(actionTypes.USER_DATA_FAILED);
