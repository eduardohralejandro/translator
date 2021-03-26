import * as actionTypes from '../constants/auth';
import {UserInitialStateI, Action} from '../types/auth';  


  const user = JSON.parse(localStorage.getItem('user') as string);
  
  const initialState = user
                      ? { isLoggedIn: true, user, message: '' }
                      : { isLoggedIn: false, user: null, message: '' };
  
  export default (state: UserInitialStateI = initialState, action: Action): UserInitialStateI => {
    
    const { type, payload } = action;

    switch (type) {
      case actionTypes.REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
        };
      case actionTypes.REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          payload: payload.user,
        };
      case actionTypes.LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          payload: null,
        };
      case actionTypes.LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          payload: null,
        };
      default:
        return state;
    }
  }