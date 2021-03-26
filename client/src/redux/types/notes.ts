import * as actionTypes from '../constants/note';


export interface NoteStateI {
    notes: string[] | string ;
    loading?: boolean;
    error?: string
}

export interface NotesI {
    createdAt: Date | string,
    _id: string,
    noteString: string,
    language: string,
    __v: any
}

type ActionAddNote = { type: typeof actionTypes.ADD_NOTE, payload: string }
type ActionGetNoteRequest = { type: typeof actionTypes.GET_NOTES_REQUEST, payload: string }
type ActionGetNoteSuccess = { type: typeof actionTypes.GET_NOTES_SUCCESS, payload: string }
type ActionGetNotesFail = {type: typeof actionTypes.GET_NOTES_FAIL, payload: string }

export type Action = ActionAddNote | ActionGetNoteRequest | ActionGetNoteSuccess | ActionGetNotesFail;