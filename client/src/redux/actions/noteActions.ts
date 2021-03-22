import * as actionTypes from '../constants/note';
import axios from 'axios';


export const getNotes = () => async (dispatch: any) => {
    try {
        const { data  } = await axios.get('http://localhost:3000/api/article');
        
        dispatch({type: actionTypes.GET_NOTES_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: actionTypes.GET_NOTES_FAIL,
            payload: error.response && 
                     error.response.data.message ? 
                     error.response.data.message : error.message
                });
    }
}



export const addNote = (body: any) => async (dispatch: any , getState: any) =>{
 
    const response = await axios.post('http://localhost:3000/api/article', { ...body });
   
    dispatch({
        type: actionTypes.ADD_NOTE,
        payload: {
            ...response.data,
        }
    })
}
