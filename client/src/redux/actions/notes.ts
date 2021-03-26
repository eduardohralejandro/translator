import axios from 'axios';
import { Dispatch } from 'redux';

import * as actionTypes from '../constants/note';
import {NotesI} from '../types/notes';


export const getNotes = () => async (dispatch: Dispatch): Promise<void> => {

    try {
        const { data  } = await axios.get('http://localhost:3000/api/article');
        
        dispatch({ type: actionTypes.GET_NOTES_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: actionTypes.GET_NOTES_FAIL,
            payload: error.response && 
                     error.response.data.message ? 
                     error.response.data.message : error.message
                });
    }
}


export const addNote = (body: NotesI) => async (dispatch: Dispatch): Promise<void> => {
 
    const response = await axios.post('http://localhost:3000/api/article', { ...body });
   
    dispatch({
        type: actionTypes.ADD_NOTE,
        payload: {
            ...response.data,
        }
    })
}
