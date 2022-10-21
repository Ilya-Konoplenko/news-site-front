import { createAction } from 'redux-actions';

import * as actionTypes from '../constants';

export const getNewsRequest = createAction(actionTypes.NEWS_REQUESTED);
export const newsReceived = createAction(actionTypes.NEWS_RECEIVED);
export const getNewsError = createAction(actionTypes.NEWS_FAILED);

export const getCreateNewsRequest = createAction(actionTypes.CREATE_NEWS_REQUESTED);
export const createNewsResponse = createAction(actionTypes.CREATE_NEWS_RESPONSE);
export const getCreateNewsError = createAction(actionTypes.CREATE_NEWS_FAILED);
