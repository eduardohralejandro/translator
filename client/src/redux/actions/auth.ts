import {Dispatch} from 'redux';

import * as actionTypes from '../constants/auth';
import {User} from '../types/auth';
import AuthService from '../../services/auth-service';


export const register = (user: User) => async (dispatch: Dispatch): Promise<void> => {

  const response = await AuthService.register(user.name, user.email, user.password);

  try {
    dispatch({ type: actionTypes.REGISTER_SUCCESS, });

    dispatch({ type: actionTypes.SET_MESSAGE, payload: response.data.message, });

  } catch (error) {
      const message = (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                      error.message || error.toString();

      dispatch({ type: actionTypes.REGISTER_FAIL, });

      dispatch({ type: actionTypes.SET_MESSAGE, payload: message, });
  }
};
  
export const login = (user: User) => async (dispatch: Dispatch): Promise<void> => {

  const response = await AuthService.login(user.email, user.password);

  try {
    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: { user: response }, });
  } catch (error) {

    const message = (error.response && 
                    error.response.data && 
                    error.response.data.message) || 
                    error.message || error.toString();
        
    dispatch({ type: actionTypes.LOGIN_FAIL, });
  
    dispatch({ type: actionTypes.SET_MESSAGE, payload: message, });
  }
};
  
export const logout = () => (dispatch: Dispatch): void => {

  AuthService.logout();

  dispatch({ type: actionTypes.LOGOUT, });
};