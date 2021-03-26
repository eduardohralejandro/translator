import * as actionTypes from '../constants/auth';


export interface MessageStateI {
  message: string | any,
  isLoggedIn: boolean,
}

type ActionSetMessage = { type: typeof actionTypes.SET_MESSAGE, payload?: string }
type ActionClearMessage = { type: typeof actionTypes.CLEAR_MESSAGE, payload?: string }


export type Action = ActionSetMessage | ActionClearMessage;