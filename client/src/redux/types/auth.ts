import * as actionTypes from '../constants/auth';


export interface User {
    _id?: string,
    email: string,
    name?: string | undefined,
    createdAt?: string,
    password: string, 
}
  
export interface UserInitialStateI {
    isLoggedIn: boolean,
    payload?: User | null,
    message: string,
}

type ActionRegisterSuccess = { type: typeof actionTypes.REGISTER_SUCCESS, payload: string }
type ActionRegisterFail = { type: typeof actionTypes.REGISTER_FAIL, payload: string }
type ActionLoginFail = { type: typeof actionTypes.LOGIN_FAIL, payload: string }
type ActionLoginSuccess = {type: typeof actionTypes.LOGIN_SUCCESS, payload: string }
type ActionLogout = { type: typeof actionTypes.LOGOUT, payload:  string | any }
  
export type Action = ActionRegisterSuccess | ActionLoginFail | ActionLoginSuccess | ActionLogout | ActionRegisterFail;