import * as actionTypes from '../constants/note';
import {NoteStateI, Action} from '../types/notes';


const defaultState: NoteStateI = {
    notes: [],
    loading: false,
    error: '',
}

export default (state: NoteStateI = defaultState , action: Action): NoteStateI => {
    
    const { payload, type } = action;

    switch (type) {
        case actionTypes.ADD_NOTE:
            return {
                ...state,
                loading: true,
                notes: [...state.notes, payload]
            };
        case actionTypes.GET_NOTES_REQUEST:
            return {
                ...state,
                loading: true,
                notes: []
            };
        case actionTypes.GET_NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                notes: payload,
            };
        case actionTypes.GET_NOTES_FAIL:
            return {
                ...state,
                notes: [],
                error: payload,
            };
        default:
            return state;
    }
}


