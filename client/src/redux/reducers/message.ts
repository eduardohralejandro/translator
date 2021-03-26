import {MessageStateI, Action} from '../types/message';
import * as actionTypes from '../constants/auth';


const defaultState: MessageStateI = {
  message: '',
  isLoggedIn: false,
}

export default (state: MessageStateI = defaultState, action: Action): MessageStateI => {
 
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_MESSAGE:
      return {
        ...state, 
        message: payload 
      };

    case actionTypes.CLEAR_MESSAGE:
      return { 
        ...state,
        message: '' 
    };

    default:
      return state;
  }
}