import * as actionTypes from '../constants/note';


export const getNotesReducer = (state = { notes: []}, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return {
                loading: true,
                notes: [...state.notes, action.payload]
            };
        case actionTypes.GET_NOTES_REQUEST:
            return {
                loading: true,
                notes: []
            };
        case actionTypes.GET_NOTES_SUCCESS:
            return {
                loading: false,
                notes: action.payload,
            };
        case actionTypes.GET_NOTES_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}


