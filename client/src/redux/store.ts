import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {getNotesReducer} from './reducers/notesReducer';
import auth from './reducers/auth';
import message from './reducers/auth';


const reducer = combineReducers({
notes: getNotesReducer,
auth,
message,
});


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
