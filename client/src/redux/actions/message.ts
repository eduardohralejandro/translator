import * as actionTypes from '../constants/auth';
import {Action} from '../types/message';


export const setMessage = (message: string): Action => ({
  type: actionTypes.SET_MESSAGE,
  payload: message,
});

export const clearMessage = (): Action => ({
  type: actionTypes.CLEAR_MESSAGE,
});