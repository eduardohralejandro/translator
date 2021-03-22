import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {getNotesReducer} from './reducers/notesReducer'


const reducer = combineReducers({
notes: getNotesReducer
});


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
